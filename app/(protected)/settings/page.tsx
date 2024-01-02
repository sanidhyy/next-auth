"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const session = useCurrentUser();

  return (
    <div className="bg-white p-10 rounded-xl">
      <Button onClick={() => logout()}>Sign out</Button>
    </div>
  );
};

export default SettingsPage;
