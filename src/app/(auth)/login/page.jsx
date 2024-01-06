import styles from "./login.module.css"
import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";

const LoginPage = async () => {
    
    return (
        <main>
            <div className={styles.container}>
                <form action={handleGithubLogin}>
                    <button>Login with GitHub</button>
                </form>
            </div>
        </main>
    )
}

export default LoginPage;
