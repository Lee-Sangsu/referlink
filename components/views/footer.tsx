import Image from "next/image"

export const Footer = () => {
    return (<footer className="bg-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image src="/icons/logo-full.png" alt="Referlink Logo" width={120} height={30} className="mb-4" />
          <p className="text-sm text-gray-500">
            (주)세레모니 | 사업자 등록 번호: 139-81-66648 | 상호: 크래 | 대표: 정준영<br />
            경기도 안산시 단원구 중앙대로784, 스텐포드타워 1040호 | 이용약관 | 개인정보처리방침<br />
            통신판매업, 제 2021-경기안산-1989호<br />
            대표번호: 070-4177-0824 | 대표메일: complete@yourcric.com<br />
            © 2021 (주)세레모니 All rights reserved.
          </p>
        </div>
      </footer>)
}