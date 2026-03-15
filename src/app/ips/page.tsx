import Link from "next/link";

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
      <div className="mb-4">
        <Link href="/" className="text-blue-700 underline hover:text-blue-900">
          ← トップへ戻る
        </Link>
      </div>

      <h1 className="text-2xl font-bold border-b-2 border-slate-800 pb-2">
        {query ? `「${query}」の検索結果` : "登録IP一覧"}
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {DUMMY_IPS.map((ip) => (
          <div key={ip.id} className="bg-white border border-slate-300 p-6 flex flex-col md:flex-row gap-6 items-start">
            {/* サムネイルのプレースホルダー */}
            <div className="w-full md:w-48 h-32 bg-slate-200 flex items-center justify-center border border-slate-300 shrink-0">
              <span className="text-slate-500 text-sm">画像準備中</span>
            </div>
            
            <div className="flex-grow space-y-2">
              <h2 className="text-xl font-bold text-slate-900">{ip.title}</h2>
              <table className="w-full text-sm text-left border-collapse mt-2">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <th className="py-2 text-slate-600 font-normal w-32">権利者:</th>
                    <td className="py-2 text-slate-900 font-bold">{ip.owner}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="py-2 text-slate-600 font-normal w-32">ライセンス目安:</th>
                    <td className="py-2 text-slate-900 font-bold text-blue-800">{ip.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 self-center">
              <Link
                href={`/ips/${ip.id}`}
                className="block text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-sm"
              >
                詳細を確認
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
