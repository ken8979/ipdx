import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col">
        {/* 官公庁風の堅牢なヘッダー */}
        <header className="bg-slate-800 text-white py-4 border-b-4 border-blue-600">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-widest">
              法人向けライセンス仲介・売買システム
              <br />
              <span className="text-2xl">デジタル版権機構 (ベータ版)</span>
            </Link>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-slate-200 text-slate-600 py-6 border-t border-slate-300">
          <div className="container mx-auto px-4 text-center text-sm">
            &copy; {new Date().getFullYear()} デジタル版権機構. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
