import { signIn } from "@/lib/auth"

const LoginPage = () => {

    const handleGithubLogin = async (e) => {
        "use server"
        await signIn("github");
    }

    return (
        <main>
            <form action={handleGithubLogin}>
                <button>Login with GitHub</button>
            </form>
        </main>
    )
}

export default LoginPage;