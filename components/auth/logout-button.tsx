"use client";

import type { PropsWithChildren } from "react";

import { logout } from "@/actions/logout";

export const LogoutButton = ({ children }: PropsWithChildren) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
