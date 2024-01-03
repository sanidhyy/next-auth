import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type HeaderProps = {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Link
        href="/"
        className={cn("text-3xl font-semibold select-none", font.className)}
      >
        🔐 Auth
      </Link>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
