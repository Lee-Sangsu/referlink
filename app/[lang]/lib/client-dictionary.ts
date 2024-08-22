import { Locale } from "@/i18nConfig";

export const ClientDictionary = (lang: Locale) => {
    if (lang === "ko") {
        return {
            signinmodal: {
                "heading": "레퍼링크 시작하기",
                "email-label": "이메일 주소",
                "email-placeholder": "이메일을 입력해주세요",
                "email-signin-btn": "이메일로 간편 로그인",
                "email-sent-btn": "✅ 이메일 전송 완료!",
                "email-sent-alert": "이메일을 확인해주세요",
                "sns-login": "SNS 간편 로그인",
                "kakao-login": "Kakao 로그인"
            }
        }
    } else {
        return {
            signinmodal: {
                "heading": "Welcome to referlink",
                "email-label": "Email address",
                "email-placeholder": "Please inscribe your email.",
                "email-signin-btn": "Get started free",
                "email-sent-btn": "✅ Email sent",
                "email-sent-alert": "Please check your email.",
                "sns-login": "SNS Sign in",
                "kakao-login": "Sign in with Kakao"
            }
        }
    }
}