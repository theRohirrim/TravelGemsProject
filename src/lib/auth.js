import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDatabase } from "./db"
import { Users } from "@/models/users"
export const nextAuth = NextAuth({ 
    providers: 
    [ 
        GitHub({ 
            clientId: process.env.GITHUB_ID, 
            clientSecret: process.env.GITHUB_SECRET 
        }) 
    ],
    callbacks: {
        async signIn({user, account, profile}) {
            if (account.provider === 'github') {
                connectToDatabase();

                try {
                    const user = await Users.findOne({email: profile.email})

                    if (!user) {
                        const newUser = new Users({
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                        })

                        await newUser.save();
                    }
                } catch (err) {
                    console.log(err)
                    return false
                }
            }
            return true
        }
    }
})

export const { handlers : { GET, POST }, auth, signIn, signOut } = nextAuth