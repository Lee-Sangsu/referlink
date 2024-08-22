import { getDictionary } from "@/components/get-dictionary";
import { Locale } from "@/i18nConfig";
import Image from "next/image";
import { verifySession } from "../../../lib/auth";


export default async function AllReferences({
    params: { lang }
}: {params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const session = await verifySession();


  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24">
        {session?.isAuth ? (<> 
          <div className="flex w-full justify-between items-center mb-6">
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
                데이터 표시 해야 함 하하
            </div>
        </>) : (<h1>로그인하ㅔ요</h1>)}
    </main>
  );
}
