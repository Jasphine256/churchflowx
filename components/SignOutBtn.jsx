
import { signOut } from "next-auth/react"
 
export default function SignOutBtn() {
  return (
    <form
      action={async () => {
        await signOut()
      }}
    >
      <button type="submit" className="p-2 bg-red-500 text-white rounded-lg">Sign Out</button>
    </form>
  )
} 