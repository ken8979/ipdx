import Link from "next/link";
import { ChevronRight } from "lucide-react";

// MVP用のダミーデータ
const DUMMY_IPS = [
  { id: "ip_0001", title: "魔界戦記 ドラゴンクエスト風RPG", owner: "株式会社レトロゲームス", price: "50,000円/月〜" },
  { id: "ip_0002", title: "超速スピンファイター", owner: "ホビー企画株式会社", price: "1日: 10,000円〜" },
  { id: "ip_0003", title: "魔法少女 マジカル・リン", owner: "スタジオ・アニメーション", price: "応相談" },
];

export default async function IpListPage(props: { searchParams: Promise<{ q?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams.q || "";

  return (
    <div className="space-y-6">
      <div className="mb-2">
        <Link href="/" className="text-[#004f98] underline hover:text-[#003b73] text-sm">
          ← トップへ戻る
        </Link>
      </div>

      <h1 className="text-2xl font-bold border-b-2 border-gray-900 pb-2">
        {query ? `「${query}」の検索結果` : "登録IP一覧"}
      </h1>

      <div className="grid grid-cols-1 gap-6 mt-6">
        {DUMMY_IPS.map((ip) => (
          <div key={ip.id} className="bg-gray-50 border border-gray-300 p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm hover:shadow transition-shadow">
            {/* サムネイルのプレースホルダー */}
            <div className="w-full md:w-56 h-36 bg-[#e0e5eb] flex items-center justify-center border border-gray-300 shrink-0">
              <span className="text-gray-500 text-sm">画像準備中</span>
            </div>
            
            <div className="flex-grow space-y-2 w-full">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-3">{ip.title}</h2>
              <table className="w-full text-sm text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-gray-600 font-normal w-32 align-top">権利者:</th>
                    <td className="py-2 text-gray-900 font-bold">{ip.owner}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-gray-600 font-normal w-32 align-top">ライセンス目安:</th>
                    <td className="py-2 text-[#004f98] font-bold">{ip.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 self-center md:self-stretch flex items-center">
              <Link
                href={`/ips/${ip.id}`}
                className="w-full md:w-auto flex items-center justify-center gap-1 bg-[#2c3e50] hover:bg-[#1a252f] text-white font-bold py-3 px-8 transition-colors shadow-sm"
              >
                詳細を確認
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
