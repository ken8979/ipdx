"use client";

import { useState, use } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ApplyFormPage(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // フォームデータ取得
    const formData = new FormData(e.currentTarget);
    const data = {
      ipId: params.id,
      applicantName: formData.get("applicantName"),
      applicantEmail: formData.get("applicantEmail"),
      purpose: formData.get("purpose"),
      desiredPeriod: formData.get("desiredPeriod"),
      budget: formData.get("budget"),
      createdAt: serverTimestamp(),
      status: "pending"
    };

    try {
      console.log("Submitting:", data);
      // Firestoreへの保存
      await addDoc(collection(db, "applications"), data);
      
      setStatus("success");
    } catch (error) {
      console.error(error);
      alert("送信に失敗しました。");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border-t-4 border-[#004f98] border-x border-b border-gray-300 shadow-sm p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">申請の受付が完了しました</h2>
          <div className="bg-gray-50 border border-gray-200 p-6 mb-8 text-left inline-block">
            <p className="text-gray-800 leading-relaxed mb-4">
              ご入力いただいたメールアドレス宛に申請内容の控えを送信いたしました。<br/>
              内容を確認の上、担当者より通常3営業日以内にご連絡いたします。
            </p>
            <p className="text-sm text-gray-600">
              ※仮に1週間経過しても連絡がない場合は、お手数ですがお問い合わせ窓口よりご連絡ください。
            </p>
          </div>
          <div>
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-[#004f98] hover:bg-[#003b73] text-white font-bold py-3 px-8 transition-colors shadow-sm">
              トップページへ戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* パンくずリスト */}
      <nav className="text-sm border-b border-gray-300 pb-2" aria-label="Breadcrumb">
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
          <li>
            <Link href={`/ips/${params.id}`} className="hover:text-[#004f98] hover:underline">詳細</Link>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 mx-1" />
          </li>
          <li className="text-gray-900 font-bold" aria-current="page">
            利用申請
          </li>
        </ol>
      </nav>

      {/* ステップインジケーター */}
      <div className="flex items-center justify-center mb-8 text-sm font-bold">
        <div className="flex flex-col items-center text-[#004f98]">
          <div className="w-8 h-8 rounded-full bg-[#004f98] text-white flex items-center justify-center mb-1 ring-4 ring-blue-100">1</div>
          <span>入力</span>
        </div>
        <div className="w-16 h-1 bg-gray-300 mx-2 -mt-5"></div>
        <div className="flex flex-col items-center text-gray-400">
          <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center mb-1">2</div>
          <span>確認</span>
        </div>
        <div className="w-16 h-1 bg-gray-300 mx-2 -mt-5"></div>
        <div className="flex flex-col items-center text-gray-400">
          <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center mb-1">3</div>
          <span>完了</span>
        </div>
      </div>

      <div className="bg-white border-t-4 border-[#004f98] border-x border-b border-gray-300 shadow-sm">
        <div className="px-8 py-5 border-b border-gray-200 bg-[#f8fafc]">
          <h1 className="text-2xl font-bold text-gray-900">利用申請フォーム</h1>
        </div>
        
        <div className="p-8">
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 text-sm text-gray-800">
            <span className="text-[#d32f2f] font-bold mr-1">※</span>
            は必須入力項目です。必ずご記入ください。
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="border border-gray-300 p-6 bg-gray-50">
              <div className="space-y-6">
                
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <div className="md:w-1/3 pt-2">
                    <label className="font-bold text-gray-900 flex items-center" htmlFor="applicantName">
                      企業名 / ご担当者氏名
                      <span className="ml-2 bg-[#d32f2f] text-white text-xs px-2 py-0.5 rounded">必須</span>
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input required type="text" id="applicantName" name="applicantName"
                      className="w-full border border-gray-400 p-3 bg-white focus:ring-2 focus:ring-[#004f98] focus:border-[#004f98] outline-none transition-shadow" 
                      placeholder="例：株式会社○○ / 山田 太郎" />
                  </div>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <div className="md:w-1/3 pt-2">
                    <label className="font-bold text-gray-900 flex items-center" htmlFor="applicantEmail">
                      連絡先メールアドレス
                      <span className="ml-2 bg-[#d32f2f] text-white text-xs px-2 py-0.5 rounded">必須</span>
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input required type="email" id="applicantEmail" name="applicantEmail"
                      className="w-full border border-gray-400 p-3 bg-white focus:ring-2 focus:ring-[#004f98] focus:border-[#004f98] outline-none transition-shadow"
                      placeholder="例：info@example.com" />
                  </div>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <div className="md:w-1/3 pt-2">
                     <label className="font-bold text-gray-900 flex items-center" htmlFor="desiredPeriod">
                      希望利用期間
                      <span className="ml-2 bg-gray-500 text-white text-xs px-2 py-0.5 rounded">任意</span>
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input type="text" id="desiredPeriod" name="desiredPeriod" 
                      placeholder="例：2024年5月1日〜1日間 / 半年間 など"
                      className="w-full border border-gray-400 p-3 bg-white focus:ring-2 focus:ring-[#004f98] focus:border-[#004f98] outline-none transition-shadow" />
                  </div>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <div className="md:w-1/3 pt-2">
                     <label className="font-bold text-gray-900 flex items-center" htmlFor="budget">
                      希望予算（税込）
                      <span className="ml-2 bg-gray-500 text-white text-xs px-2 py-0.5 rounded">任意</span>
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input type="text" id="budget" name="budget" 
                      placeholder="例：10万円以内 / 応相談"
                      className="w-full border border-gray-400 p-3 bg-white focus:ring-2 focus:ring-[#004f98] focus:border-[#004f98] outline-none transition-shadow" />
                  </div>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <div className="md:w-1/3 pt-2">
                    <label className="font-bold text-gray-900 flex items-center" htmlFor="purpose">
                      詳細な利用目的
                      <span className="ml-2 bg-[#d32f2f] text-white text-xs px-2 py-0.5 rounded">必須</span>
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <textarea required id="purpose" name="purpose" rows={6}
                      className="w-full border border-gray-400 p-3 bg-white focus:ring-2 focus:ring-[#004f98] focus:border-[#004f98] outline-none transition-shadow" 
                      placeholder="想定している商材、イベント内容、利用メディアなどを具体的にご記入ください。"></textarea>
                  </div>
                </div>

              </div>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-[#004f98] hover:bg-[#003b73] text-white font-bold py-4 px-16 text-lg transition-colors shadow-sm disabled:opacity-50 inline-flex items-center justify-center gap-2"
              >
                {status === "submitting" ? "送信処理中..." : "確認画面へ進む"}
                {!status && <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
