import { cookies } from "next/headers";
import { cache } from "react"
import { decrypt } from "./session";
import { redirect } from "next/navigation";
// import { verifySession } from "./session"

export const verifySession = cache(async () => {
    const cookie = cookies().get('session')?.value
    const session = await decrypt(cookie)

    if (!session?.userId) {
        // redirect('/login')
        return ;
    }

    return { isAuth: true, userId: session.userId }
});


// export const getUser = cache(async () => {
//     const session = await verifySession()
//     if (!session) return null
   
//     try {
//       // fetch user
   
//       return true;
//     } catch (error) {
//       console.log('Failed to fetch user')
//       return null
//     }
//   })