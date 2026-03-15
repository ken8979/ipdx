import Link from "next/link";
import { Search } from "lucide-react";

export default function TopPage() {
  return (
    <div className="space-y-10">
      <section className="bg-white border-t-4 border-[#004f98] shadow-sm">
        <div className="bg-[#f0f5fc] px-8 py-5 border-b border-gray-200">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Search className="w-6 h-6 text-[#004f98]" />
            IPライセンスの検索
          </h1>
        </div>
        <div className="p-8">
          <p className="mb-6 text-gray-700">
            利用可能なエンターテイメントIP（ゲーム、アニメーション、キャラクター等）を検索できます。<br/>
            目的のキーワードを入力し、検索ボタンを押してください。
          </p>

          <form action="/ips" method="GET" className="bg-gray-50 p-6 border border-gray-200 rounded-sm">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-grow w-full">
                <label htmlFor="search-q" className="block text-sm font-bold text-gray-700 mb-2">検索キーワード</label>
                <input
                  id="search-q"
                  type="text"
                  name="q"
                  placeholder="例：レトロゲーム、RPG、キャラクター名"
                  className="w-full border border-gray-400 p-3 text-lg focus:ring-2 focus:ring-[#004f98] focus:border-[#004f98] focus:outline-none transition-colors shadow-inner"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#004f98] hover:bg-[#003b73] text-white font-bold py-3 px-10 text-lg transition-colors flex items-center justify-center gap-2 shadow-sm rounded-sm"
              >
                <Search className="w-5 h-5" />
                検索する
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-bold border-b-2 border-[#004f98] pb-2 flex items-center gap-2">
            お知らせ・各種ご案内
          </h2>
          <div className="bg-white border border-gray-300 shadow-sm">
            <ul className="divide-y divide-gray-200">
              <li className="p-4 hover:bg-gray-50 transition-colors">
                <Link href="#" className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="flex items-center gap-3 w-40 flex-shrink-0">
                    <span className="text-gray-600 font-mono">2024年03月15日</span>
                    <span className="bg-blue-100 text-[#004f98] text-xs font-bold px-2 py-0.5 rounded border border-blue-200">お知らせ</span>
                  </div>
                  <span className="text-gray-900 group-hover:text-[#004f98] group-hover:underline">デジタル版権機構ベータ版の試験運用を開始しました。</span>
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-50 transition-colors">
                <Link href="#" className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="flex items-center gap-3 w-40 flex-shrink-0">
                    <span className="text-gray-600 font-mono">2024年03月15日</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-0.5 rounded border border-gray-200">ご案内</span>
                  </div>
                  <span className="text-gray-900 group-hover:text-[#004f98] group-hover:underline">休眠IPの登録申請については、別途お問い合わせ窓口より書類をご提出ください。</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-right mt-2">
            <Link href="#" className="text-[#004f98] hover:underline text-sm font-bold flex items-center justify-end gap-1">
              お知らせ一覧を見る <span className="text-lg leading-none">›</span>
            </Link>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold border-b-2 border-[#004f98] pb-2">
            お役立ちリンク
          </h2>
          <div className="grid grid-cols-1 gap-3">
             <Link href="#" className="bg-white border border-gray-300 p-4 hover:bg-gray-50 transition-colors flex items-center justify-between shadow-sm group">
               <span className="font-bold text-gray-800 group-hover:text-[#004f98]">初めての方へ</span>
               <span className="text-gray-400 group-hover:text-[#004f98]">›</span>
             </Link>
             <Link href="#" className="bg-white border border-gray-300 p-4 hover:bg-gray-50 transition-colors flex items-center justify-between shadow-sm group">
               <span className="font-bold text-gray-800 group-hover:text-[#004f98]">ライセンス契約の基礎知識</span>
               <span className="text-gray-400 group-hover:text-[#004f98]">›</span>
             </Link>
             <Link href="#" className="bg-[#004f98] border border-[#003b73] p-4 hover:bg-[#003b73] transition-colors flex items-center justify-between shadow-sm text-white">
               <span className="font-bold">IPを登録したい権利者様へ</span>
               <span>›</span>
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
