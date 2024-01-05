import Test from "@/components/test/Test";
import { AuthContext } from "@/contexts/auth";
import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";
import { useContext } from "react";

const LoginPage = async () => {

    return (
        <main>
            <form action={handleGithubLogin}>
                <button>Login with GitHub</button>
                <Test />
            </form>
        </main>
    )
}

export default LoginPage;
