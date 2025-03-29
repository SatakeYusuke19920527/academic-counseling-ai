// /**
//  * RAG extra用のAPIルート
//  */
import { getBase64File } from '../../../util/extra-1/blob';
import { getItemsByVector } from '../../../util/extra-1/cosmos';
import {
  getChatCompletions,
  getEmbedding,
} from '@/util/extra-1/openai-extra-shrkm';
// import { NextRequest } from 'next/dist/server/web/spec-extension/request';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/dist/server/web/spec-extension/response';


export const POST = async (req: NextRequest, ) => {
  try {
    const { message } = await req.json();

    console.log('🚀RAG-extra用のAPIルート');

    // ベクトル化
    console.log('🚀Get embedding from Azure OpenAI.');
    const embeddedMessage = await getEmbedding(message);

    // CosmosDBでベクトル検索
    console.log('🚀Search vector from Azure CosmosDB.');
    const cosmosItems = await getItemsByVector(embeddedMessage);

    // systemMessageにRAGの情報を追加
    console.log('🚀Create system message and image_content.');
    let systemMessage =
      'あなたは優秀な進路相談師です。入ってきたデータを参考にして進路先を提示してください。進学するべき大学は具体名を用いて提示してください。日本語の文章で出力するようにしてください"# 検索結果"より下の事は使わないでください';
     systemMessage += '# 検索結果\n';
    let images = [];
    for (const result of cosmosItems) {
    //   // ループ番号を追加
    //   systemMessage +=
    //     '## ' +
    //     (cosmosItems.indexOf(result) + 1) +
    //     '\n' +
    //     result.content +
    //     '\n\n';
    //   // 画像の取得
      if (result.is_contain_image === true) {
        const image = await getBase64File(result.image_blob_path);
        images.push(image);
      }
    }
    console.log('🚀systemMessage:', systemMessage);

    // OpenAI へのリクエスト
    const result = await getChatCompletions(systemMessage, message, images);
    let aiMessage = result[0].message.content;

    return NextResponse.json({ aiMessage }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ aiMessage: error.message }, { status: 500 });
  }
};
export const dynamic = 'force-dynamic';
// export async function POST(req: NextRequest) {
//   try {
//     // リクエストボディの解析を try-catch で囲む
//     let message;
//     try {
//       const body = await req.json();
//       message = body.message;
//     } catch (parseError) {
//       return NextResponse.json({
//         error: '無効なリクエスト形式です'
//       }, { status: 400 });
//     }

//     // 必ずJSONレスポンスを返す
//     return NextResponse.json({
//       aiMessage: `受信したメッセージ: ${message}`,
//       timestamp: new Date().toISOString()
//     });

//   } catch (error) {
//     // エラーも必ずJSON形式で返す
//     console.error('APIエラー:', error);
//     return NextResponse.json({
//       error: 'サーバーエラーが発生しました',
//       details: error instanceof Error ? error.message : '不明なエラー'
//     }, { status: 500 });
//   }
// }

// export const dynamic = 'force-dynamic';

