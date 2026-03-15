import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

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
      {/* パンくずリスト */}
      <nav className="text-sm border-b border-gray-300 pb-2 mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#004f98] hover:underline">ホーム</Link>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 mx-1" />
          </li>
          <li>
            <Link href="/ips" className="hover:text-[#004f98] hover:underline">登録IP一覧</Link>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 mx-1" />
          </li>
          <li className="text-gray-900 font-bold" aria-current="page">
            {ip.title}
          </li>
        </ol>
      </nav>

      <div className="bg-white border-t-4 border-[#004f98] border-x border-b border-gray-300 shadow-sm">
        <div className="px-8 py-6 border-b border-gray-200 bg-[#f8fafc]">
          <h1 className="text-3xl font-bold text-gray-900 leading-snug">
            {ip.title}
          </h1>
        </div>
        
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-10 mb-10">
            <div className="w-full md:w-1/3 h-72 bg-[#e0e5eb] flex items-center justify-center border border-gray-300 shadow-inner">
               <span className="text-gray-500 text-sm">メインビジュアル画像</span>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-bold bg-white border-l-8 border-[#004f98] pl-3 py-1 mb-4 flex items-center">
                IP概要
              </h2>
              <p className="mb-6 leading-relaxed text-gray-800 bg-gray-50 p-4 border border-gray-200">
                1990年代後半に発売された王道RPGシリーズ。独特のドット絵やキャラクターデザイン、
                重厚な世界観が特徴です。ゲームのリメイク、アパレルグッズ化、または1日限定の
                イベントでのキャラクター利用など、柔軟な利用枠を設けています。
              </p>

              <table className="w-full border-collapse border border-gray-300 text-sm">
                <tbody>
                  <tr>
                    <th className="bg-[#f0f5fc] border border-gray-300 p-4 text-left w-40 font-bold text-gray-800">権利者</th>
                    <td className="border border-gray-300 p-4 font-bold text-gray-900">{ip.owner}</td>
                  </tr>
                  <tr>
                    <th className="bg-[#f0f5fc] border border-gray-300 p-4 text-left w-40 font-bold text-gray-800">利用可能範囲</th>
                    <td className="border border-gray-300 p-4 text-gray-900">グッズ化・映像化・1日限定のポスター利用など可</td>
                  </tr>
                  <tr>
                    <th className="bg-[#f0f5fc] border border-gray-300 p-4 text-left w-40 font-bold text-gray-800">過去の利用実績</th>
                    <td className="border border-gray-300 p-4 text-gray-900">2023年: 有名カフェチェーンでのコラボメニュー提供</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-[#f8fafc] border border-gray-300 p-10 text-center">
            <h3 className="text-xl font-bold mb-4 text-[#004f98]">本IPの利用申請について</h3>
            <p className="mb-8 font-normal text-gray-800 leading-relaxed max-w-2xl mx-auto">
              本IPの利用に関するご相談・申請をご希望の方は、利用規約をご確認の上、
              以下のボタンより申請手続きへお進みください。<br/>
              <span className="text-sm text-gray-600 mt-2 inline-block">※申請後、担当者より詳細なヒアリングを行わせていただきます。</span>
            </p>
            <Link
              href={`/ips/${params.id}/apply`}
              className="inline-flex items-center justify-center gap-2 bg-[#004f98] hover:bg-[#003b73] text-white font-bold py-4 px-12 text-lg transition-colors shadow-sm"
            >
              利用申請情報の入力へ進む
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
