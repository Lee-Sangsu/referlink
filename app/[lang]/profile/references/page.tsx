import { emailSignIn } from "@/components/auth/emailAuth";
import { getDictionary } from "@/components/get-dictionary";
import { Locale } from "@/i18nConfig";
import Image from "next/image";
import { verifySession } from "../../lib/auth";

interface ReferralBox {
    name: string;
    department: string;
    position: string;
    email: string;
    date: string;
    isPublic: boolean;
  }
  
  const referrals: ReferralBox[] = [
    {
      name: '작성자',
      department: '소속: 위드팀',
      position: '직무: PM',
      email: 'joon@pm-minji.com',
      date: '2023.08.24',
      isPublic: true,
    },
    // ... add more referrals as needed
  ];
  

export default async function AllReferences({
    params: { lang }
}: {params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const session = await verifySession();


  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24">
        {session?.isAuth ? (<> 
          <div className="flex w-[100%] justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-600">내가 받은 평판</h1>
            <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                평판 작성 요청
                </button>
            </div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {referrals.map((referral, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                    <h3 className="font-bold">{referral.name}</h3>
                    <p className="text-sm text-gray-600">{referral.department}</p>
                    <p className="text-sm text-gray-600">{referral.position}</p>
                    <p className="text-sm text-gray-600">{referral.email}</p>
                    </div>
                    <div className="flex items-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    평판 공개
                    </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {referral.date}
                </div>
                <button className="w-full px-4 py-2 bg-blue-100 text-blue-600 rounded-md text-sm font-medium">
                    공유하기
                </button>
                </div>
            ))}
            </div>
        </>) : (<h1>로그인하ㅔ요</h1>)}
    </main>
  );
}
