import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function POST() {
  try {
    // Use public placeholder images (different angles of the same object)
    const imageUrls = [
      'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570727624862-3008fe67a6be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1661978039834-5fdeb00054f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628583117576-a6f0f958d042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ];

    // Create Meshy task
    const meshyResponse = await fetch(
      'https://api.meshy.ai/openapi/v1/multi-image-to-3d',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.MESHY_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_urls: imageUrls,
          should_texture: true,
          topology: 'quad',
          target_polycount: 10000,
        }),
      }
    );

    if (!meshyResponse.ok) {
      const error = await meshyResponse.text();
      return NextResponse.json(
        { error: `Meshy API: ${error}` },
        { status: meshyResponse.status }
      );
    }

    const { result: taskId } = await meshyResponse.json() as { result: string };
    return NextResponse.json({ taskId });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Processing failed' },
      { status: 500 }
    );
  }
}