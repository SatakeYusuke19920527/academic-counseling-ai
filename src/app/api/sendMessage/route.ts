import { getOpenAIData } from '@/util/openai';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const { message } = await req.json();
    const result = await getOpenAIData(message);
    const aiMessage = result[0].message.content;
    return NextResponse.json({ aiMessage }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ aiMessage: error.message }, { status: 500 });
  }
};
