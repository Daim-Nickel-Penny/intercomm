import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  href?: string;
}

export default function NavButton({ icon: Icon, label, href }: NavButtonProps) {
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      aria-label={label}
      title={label}
      className="rounded-md"
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon className="h-6 w-6" />
        </Link>
      ) : (
        <Icon className="h-6 w-6" />
      )}
    </Button>
  );
}
