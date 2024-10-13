import { NextResponse } from 'next/server';
import { posts } from '@/app/api/data';

export async function GET() {
  return NextResponse.json({
    posts,
  });
}
