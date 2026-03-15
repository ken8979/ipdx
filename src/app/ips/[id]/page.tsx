import Link from "next/link";
import { notFound } from "next/navigation";

// MVP用のダミーデータ
const DUMMY_IPS = [
  { id: "ip_0001", title: "魔界戦記 ドラゴンクエスト風RPG", owner: "株式会社レトロゲームス", price: "50,000円/月〜" },
  { id: "ip_0002", title: "超速スピンファイター", owner: "ホビー企画株式会社", price: "1日: 10,000円〜" },
  { id: "ip_0003", title: "魔法少女 マジカル・リン", owner: "スタジオ・アニメーション", price: "応相談" },
];

export default async function IpDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const ip = DUMMY_IPS.find(i => i.id === params.id);
  
  if (!ip) {
    notFound();
  }

  // 本来はFirestoreからparams.idを使ってデータを取得
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="mb-4">
        <Link href="/ips" className="text-blue-700 underline hover:text-blue-900">
          ← 一覧へ戻る
        </Link>
      </div>

      <div className="bg-white border border-slate-300 p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-slate-800 pb-4">
          {ip.title}
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/3 h-64 bg-slate-200 flex items-center justify-center border border-slate-300">
             <span className="text-slate-500 text-sm">メインビジュアル画像</span>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-lg font-bold bg-slate-100 p-2 border-l-4 border-slate-800 mb-3">IP概要</h2>
            <p className="mb-6 leading-relaxed text-slate-800">
              1990年代後半に発売された王道RPGシリーズ。独特のドット絵やキャラクターデザイン、
              重厚な世界観が特徴です。ゲームのリメイク、アパレルグッズ化、または1日限定の
              イベントでのキャラクター利用など、柔軟な利用枠を設けています。
            </p>

            <table className="w-full border-collapse border border-slate-300">
              <tbody>
                <tr>
                  <th className="bg-slate-100 border border-slate-300 p-3 text-left w-40 font-bold">権利者</th>
                  <td className="border border-slate-300 p-3">{ip.owner}</td>
                </tr>
                <tr>
                  <th className="bg-slate-100 border border-slate-300 p-3 text-left w-40 font-bold">利用可能範囲</th>
                  <td className="border border-slate-300 p-3">グッズ化・映像化・1日限定のポスター利用など可</td>
                </tr>
                <tr>
                  <th className="bg-slate-100 border border-slate-300 p-3 text-left w-40 font-bold">過去の利用実績</th>
                  <td className="border border-slate-300 p-3">2023年: 有名カフェチェーンでのコラボメニュー提供</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-12 bg-slate-50 border border-slate-200 p-8 rounded-sm">
          <p className="mb-4 font-bold text-slate-800">
            本IPの利用に関するご相談・申請をご希望の方は、以下のボタンよりお手続きください。
          </p>
          <Link
            href={`/ips/${params.id}/apply`}
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-12 text-lg rounded-sm"
          >
            利用申請情報の入力へ進む
          </Link>
        </div>
      </div>
    </div>
  );
}
