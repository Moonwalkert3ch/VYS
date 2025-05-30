import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
        <SignIn appearance={{
          elements: {
            card: "sign-in-card-head bg p-6 rounded-xl shadow-xl",
          },
        }} />
    </div>
  );
}
