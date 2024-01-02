"use client";

import { UserRole } from "@prisma/client";
import { useState } from "react";
import { toast } from "sonner";

import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const AdminPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onApiRouteClick = () => {
    setIsLoading(true);

    fetch("/api/admin")
      .then((response) => {
        if (response.ok) toast.success("Allowed API Route.");
        else toast.error("Forbidden API Route.");
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑 Admin</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content." />
        </RoleGate>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>

          <Button
            onClick={onApiRouteClick}
            disabled={isLoading}
            aria-disabled={isLoading}
          >
            Click to test
          </Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>

          <Button>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
