import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { posts } from '@/app/api/data';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const postId = params.id;

  const getPost = () => posts.find((post) => post.id === postId);

  return NextResponse.json(getPost());
}
