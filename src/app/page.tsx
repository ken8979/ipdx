import Link from "next/link";

export default function TopPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <section className="bg-white p-8 border border-slate-300 shadow-sm rounded-sm">
        <h1 className="text-2xl font-bold mb-4 border-b-2 border-slate-800 pb-2">
          IPライセンスの検索
        </h1>
        <p className="mb-6 text-slate-600">
          利用可能なエンターテイメントIP（ゲーム、アニメーション、キャラクター等）を検索できます。
          目的のキーワードを入力し、検索ボタンを押してください。
        </p>

        {/* 検索窓（MVPなので直接一覧ページへ遷移させる想定） */}
        <form action="/ips" method="GET" className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="q"
            placeholder="キーワード（例：レトロゲーム、RPG、キャラクター名）"
            className="flex-grow border border-slate-400 p-3 text-lg rounded-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
            aria-label="検索キーワード"
          />
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 text-lg rounded-sm transition-colors"
          >
            検索する
          </button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold border-l-4 border-slate-800 pl-3">
          お知らせ・各種ご案内
        </h2>
        <ul className="bg-white border border-slate-300 divide-y divide-slate-200">
          <li className="p-4 flex gap-4">
            <span className="text-slate-500 w-24 flex-shrink-0">2024.03.15</span>
            <span>デジタル版権機構ベータ版の試験運用を開始しました。</span>
          </li>
          <li className="p-4 flex gap-4">
            <span className="text-slate-500 w-24 flex-shrink-0">2024.03.15</span>
            <span>休眠IPの登録申請については、別途お問い合わせ窓口より書類をご提出ください。</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
