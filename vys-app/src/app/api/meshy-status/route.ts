import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const taskId = searchParams.get("taskId");
    
    if (!taskId) {
      return NextResponse.json(
        { error: "Missing task ID" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://api.meshy.ai/v1/image-to-3d/${taskId}`,
      {
        headers: {
          "Authorization": `Bearer ${process.env.MESHY_API_KEY}`,
        },
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || "Failed to check status" },
        { status: response.status }
      );
    }

    // Extract the relevant data from the response
    const result = {
      status: data.status,
      progress: data.progress,
      model_urls: data.model_urls || {},
      thumbnail_url: data.thumbnail_url || "",
      texture_urls: data.texture_urls || [],
      error: data.task_error?.message || "",
    };

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}