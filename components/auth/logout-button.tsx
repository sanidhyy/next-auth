"use client";

import type { PropsWithChildren } from "react";
import { useTransition } from "react";

import { logout } from "@/actions/logout";

export const LogoutButton = ({ children }: PropsWithChildren) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      logout();
    });
  };

  return (
    <button
      disabled={isPending}
      aria-disabled={isPending}
      onClick={onClick}
      className="w-full cursor-pointer"
    >
      {children}
    </button>
  );
};
