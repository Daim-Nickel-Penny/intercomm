import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Login() {
  return (
    <main className="h-dvh flex flex-col gap-6 p-4 justify-center items-center">
      <h1>Intercom</h1>
      <Button asChild>
        <LoginLink>Sign in</LoginLink>
      </Button>
    </main>
  );
}
