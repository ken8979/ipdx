import { onDocumentCreated } from "firebase-functions/v2/firestore";
// import * as nodemailer from "nodemailer";
import * as logger from "firebase-functions/logger";

// SMTPサーバー（GmailやSendGrid等）の設定
/*
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER, // 例: admin@example.com
    pass: process.env.SMTP_PASS, // アプリパスワード
  },
});
*/

export const sendApplicationNotification = onDocumentCreated(
  { document: "applications/{applicationId}", region: "asia-northeast1" },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    // 1. 管理者へのお知らせメール内容
    /*
    const mailOptions = {
      from: '"デジタル版権機構 システム" <noreply@example.com>',
      to: "admin@platform.com", // プラットフォーム管理者のアドレス
      subject: "【自動通知】新規のIP利用申請がありました",
      text: `新規のIP利用申請を受信しました。\n
        【申請者】 ${data.applicantName}
        【連絡先】 ${data.applicantEmail}
        【対象IP ID】 ${data.ipId}
        【利用目的】 ${data.purpose}
        【希望予算】 ${data.budget}\n
        Firestoreコンソールより詳細を確認してください。`,
    };

    try {
      await transporter.sendMail(mailOptions);
      logger.info("管理者宛メール送信完了", { docId: event.params.applicationId });
    } catch (error) {
      logger.error("メール送信エラー", error);
    }
    */
    logger.info("Application notification logic executed (dummy).", { docId: event.params.applicationId });
  }
);
