import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-[#f0f2f5] text-gray-900 font-sans min-h-screen flex flex-col">
        {/* マイナポータル/j-BIZ風のヘッダー */}
        <header className="bg-white border-b border-gray-300">
          <div className="bg-[#004f98] h-2 w-full"></div>
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              {/* 架空の日本政府・公的機関風のロゴ */}
              <div className="w-10 h-10 rounded-full bg-[#004f98] flex items-center justify-center text-white font-bold text-xs ring-2 ring-white ring-offset-2">
                版権
              </div>
              <div className="leading-tight">
                <div className="text-xs text-gray-500 font-semibold mb-0.5">法人向けライセンス仲介・売買システム</div>
                <div className="text-xl font-bold text-[#004f98] tracking-wider">デジタル版権機構 <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">ベータ版</span></div>
              </div>
            </Link>
            
            {/* クイックメニュー（アクセシビリティ風） */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2 border-r border-gray-300 pr-4">
                <span>文字サイズ</span>
                <button className="px-2 py-1 border border-gray-300 bg-white hover:bg-gray-50 rounded">標準</button>
                <button className="px-2 py-1 border border-gray-300 bg-white hover:bg-gray-50 rounded text-lg leading-none">大</button>
              </div>
              <Link href="#" className="hover:text-[#004f98] hover:underline">よくあるご質問</Link>
              <Link href="#" className="hover:text-[#004f98] hover:underline">お問い合わせ</Link>
            </div>
          </div>
        </header>

        {/* ページ上部の青い帯（装飾用） */}
        <div className="bg-[#004f98] text-white py-1">
          <div className="container mx-auto px-4 text-xs font-light">
            これは試験運用中のベータ版システムです。
          </div>
        </div>

        <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
          {children}
        </main>

        <footer className="bg-[#333333] text-gray-300 py-8 border-t-4 border-[#004f98] mt-auto">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-b border-gray-600 pb-8">
              <div>
                <h3 className="text-white font-bold mb-4">サイトについて</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline">利用規約</Link></li>
                  <li><Link href="#" className="hover:underline">プライバシーポリシー</Link></li>
                  <li><Link href="#" className="hover:underline">アクセシビリティ方針</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">お問い合わせ</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline">よくあるご質問</Link></li>
                  <li><Link href="#" className="hover:underline">お問い合わせフォーム</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">関連リンク</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline">文化庁</Link></li>
                  <li><Link href="#" className="hover:underline">特許庁</Link></li>
                </ul>
              </div>
              <div>
                <div className="mb-4">
                  <div className="text-xl font-bold text-white tracking-wider mb-2">デジタル版権機構</div>
                  <div className="text-sm">〒100-8959<br/>東京都千代田区霞が関3丁目2番2号</div>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm font-light">
              &copy; {new Date().getFullYear()} デジタル版権機構. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
