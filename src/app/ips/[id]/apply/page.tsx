"use client";

import { useState, use } from "react";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "@/lib/firebase";

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
      // createdAt: serverTimestamp(),
      status: "pending"
    };

    try {
      // 実際の実装時に以下のコメントアウトを外します
      // await addDoc(collection(db, "applications"), data);
      console.log("Submitting:", data);
      
      // ダミー通信遅延
      await new Promise((res) => setTimeout(res, 1000));
      setStatus("success");
    } catch (error) {
      console.error(error);
      alert("送信に失敗しました。");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className=" max-w-2xl mx-auto bg-white border border-green-600 p-8 text-center mt-12">
        <h2 className="text-xl font-bold text-green-700 mb-4">申請の受付が完了しました</h2>
        <p className="text-slate-700 mb-6">
          ご入力いただいたメールアドレス宛に控えを送信しました。<br/>
          内容を確認の上、担当者より数日以内にご連絡いたします。
        </p>
        <a href="/" className="text-blue-700 underline">トップページへ戻る</a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold border-b-2 border-slate-800 pb-2 mb-6">利用申請フォーム</h1>
      <p className="mb-6 text-sm text-slate-600">
        <span className="text-red-600 font-bold">*</span> は必須項目です。
      </p>

      <form onSubmit={handleSubmit} className="bg-white border border-slate-300 p-8 shadow-sm space-y-6">
        <div>
          <label className="block text-slate-900 font-bold mb-2" htmlFor="applicantName">
            企業名 / ご担当者氏名 <span className="text-red-600">*</span>
          </label>
          <input required type="text" id="applicantName" name="applicantName"
            className="w-full border border-slate-400 p-3 rounded-sm focus:ring-2 focus:ring-blue-600" />
        </div>

        <div>
          <label className="block text-slate-900 font-bold mb-2" htmlFor="applicantEmail">
            連絡先メールアドレス <span className="text-red-600">*</span>
          </label>
          <input required type="email" id="applicantEmail" name="applicantEmail"
            className="w-full border border-slate-400 p-3 rounded-sm focus:ring-2 focus:ring-blue-600" />
        </div>

        <div>
           <label className="block text-slate-900 font-bold mb-2" htmlFor="desiredPeriod">
            希望利用期間
          </label>
          <input type="text" id="desiredPeriod" name="desiredPeriod" placeholder="例: 2024年5月1日〜1日間 / 半年間 など"
            className="w-full border border-slate-400 p-3 rounded-sm focus:ring-2 focus:ring-blue-600" />
        </div>

        <div>
           <label className="block text-slate-900 font-bold mb-2" htmlFor="budget">
            希望予算（税込）
          </label>
          <input type="text" id="budget" name="budget" placeholder="例: 10万円以内 / 応相談"
            className="w-full border border-slate-400 p-3 rounded-sm focus:ring-2 focus:ring-blue-600" />
        </div>

        <div>
          <label className="block text-slate-900 font-bold mb-2" htmlFor="purpose">
            詳細な利用目的 <span className="text-red-600">*</span>
          </label>
          <textarea required id="purpose" name="purpose" rows={5}
            className="w-full border border-slate-400 p-3 rounded-sm focus:ring-2 focus:ring-blue-600" 
            placeholder="想定している商材、イベント内容、利用メディアなどを具体的にご記入ください。"></textarea>
        </div>

        <div className="text-center pt-6 border-t border-slate-200">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-10 text-lg rounded-sm w-full md:w-auto disabled:opacity-50"
          >
            {status === "submitting" ? "送信処理中..." : "以上の内容で申請を送信する"}
          </button>
        </div>
      </form>
    </div>
  );
}
