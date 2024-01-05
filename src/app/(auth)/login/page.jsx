import Test from "@/components/test/Test";
import styles from "./login.module.css"
import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";

const LoginPage = () => {
    return (
        <main>
            <div className={styles.container}>
                <form action={handleGithubLogin}>
                    <button>Login with GitHub</button>
                </form>
                <Test />
            </div>
        </main>
    )
}

export default LoginPage;
