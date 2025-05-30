import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp appearance={{
        elements: {
          card: "sign-up-card-head bg_reverse p-6 rounded-xl shadow-xl",
        }
      }}/>
    </div>
  )
}
