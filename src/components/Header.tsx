import { File, HomeIcon, LogOut, User } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-background h-12 p-2 border-b sticky top-0 z-50">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton icon={HomeIcon} label="Home" href="/home" />

          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Intercomm
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton icon={File} label="Tickets" href="/tickets" />
          <NavButton icon={User} label="Customers" href="/customers" />
          <ModeToggle />

          <Button
            variant={"ghost"}
            size={"icon"}
            asChild
            className="rounded-md"
            title="Logout"
            aria-label="Logout"
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
