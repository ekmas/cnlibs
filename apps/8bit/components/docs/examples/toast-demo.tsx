"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

function showToast() {
  toast.add({
    title: "Event created",
    description: "Sunday, December 3 at 9:00 AM",
  });
}

export function ToastDemo() {
  return (
    <Button onClick={showToast} variant="outline">
      Show Toast
    </Button>
  );
}
