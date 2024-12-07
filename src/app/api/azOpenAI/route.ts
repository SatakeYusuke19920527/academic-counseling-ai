import { NextResponse } from 'next/server';
import { getAzOpenAIData } from '../../../models/azopenaiApplicationService';


// GETリクエストを処理する関数
export const GET = async (req: Request,userId: string, ) => {
  try {
    const url = new URL(req.url);
    const message = url.searchParams.get(`message`);
    if (!message) {
      return NextResponse.json({ error: 'Message query parameter is required' }, { status: 400 });
    }

    const data = await getAzOpenAIData(message,userId);
    const response = NextResponse.json(data, { status: 200 });
    response.headers.set('Access-Control-Allow-Origin', `https://purple-bush-0fb0dd100.5.azurestaticapps.net/result`); // 必要に応じてオリジンを指定
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  } catch (error: any) {
    console.log('🚀 ~ file: route.ts ~ error:', error);
    const response = NextResponse.json({ error: error.message }, { status: 500 });
    response.headers.set('Access-Control-Allow-Origin', `https://purple-bush-0fb0dd100.5.azurestaticapps.net/result`);
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
  }
};

export const dynamic = 'force-dynamic';