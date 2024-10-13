import type { ValueOf } from 'next/constants';
import type { ENDPOINTS } from '@/app/constants';

export type ApiResponse<T> = {
  data: T | null;
  status: number;
};

export const getData = async <T>(
  endpoint: ValueOf<keyof typeof ENDPOINTS>,
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`);
    const { status, statusText, ok, headers } = response;

    if (!ok) {
      console.error(`Error: ${status} - ${statusText}`);
      return { data: null, status };
    }

    const contentType = headers.get('content-type');
    if (contentType?.includes('application/json')) {
      const data = await response.json();
      return { data, status };
    }

    console.warn('Response is not JSON');
    return { data: null, status };
  } catch (error) {
    console.error('Fetch error:', error);
    return { data: null, status: 0 };
  }
};
