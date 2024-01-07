import { Users } from "@/models/users";
import { signIn, signOut } from "./auth";
import { connectToDatabase } from "./db";

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github")
}

export const handleLogout = async () => {
    "use server"
    await signOut()
}

export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData)
    if (password !== passwordRepeat) {
        return {error: "Passwords do not match"}
    }

    try {
        connectToDatabase()

        const user = await Users.findOne({username})

        if (user) {
            return {error: "Username already exists"}
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img
        })

        console.log(newUser);

        await newUser.save();
        return {success: true}
    } catch (err) {
        console.log(err)
        return  { error: "Something went wrong"}
    }
}

export const login = async (previousState, formData) => {
    const { username, password} = Object.fromEntries(formData)

    try {
        await signIn("credentials", {username, password})
    } catch (err) {
        console.log(err)

        if (err.message.includes("CredentialsSignin")) {
            return {error: "Invalid username or password"}
        }
        return  { error: "Something went wrong"}
    }
}