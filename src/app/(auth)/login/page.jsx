import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./login.module.css"
import { handleGithubLogin } from "@/lib/action";

const LoginPage = () => {
    
    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.github}>Login with GitHub</button>
                </form>
                <LoginForm />
            </div>
        </main>
    )
}

export default LoginPage;
