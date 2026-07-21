"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function showToast() {
  toast("Event has been created", {
    description: "Sunday, July 20, 2026 at 9:00 AM",
  });
}

export function SonnerDemo() {
  return (
    <Button onClick={showToast} variant="outline">
      Show Toast
    </Button>
  );
}
