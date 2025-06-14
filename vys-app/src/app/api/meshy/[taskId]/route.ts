import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { taskId: string } }
) {
  try {
    // Access taskId directly from params without destructuring
    const taskId = params['taskId'];
    
    if (!taskId) {
      return NextResponse.json(
        { error: 'Task ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://api.meshy.ai/openapi/v1/multi-image-to-3d/${taskId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MESHY_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: `Meshy API: ${error}` },
        { status: response.status }
      );
    }

    const taskData = await response.json();
    return NextResponse.json({
      status: taskData.status,
      progress: taskData.progress,
      modelUrl: taskData.model_urls?.glb,
      thumbnailUrl: taskData.thumbnail_url,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch task' },
      { status: 500 }
    );
  }
}