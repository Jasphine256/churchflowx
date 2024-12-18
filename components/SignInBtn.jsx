
import { signIn } from "next-auth/react"
 
export default function SignInBtn() {
  return (
    <form
      action={async () => {
        await signIn()
      }}
    >
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">Sign In</button>
    </form>
  )
} 