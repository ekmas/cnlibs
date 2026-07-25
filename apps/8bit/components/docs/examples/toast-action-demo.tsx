"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

function showToast() {
  const id = toast.add({
    description: "Sunday, December 3 at 9:00 AM",
    title: "Event created",
    actionProps: {
      children: "Undo",
      onClick() {
        toast.close(id);
      },
    },
  });
}

export function ToastActionDemo() {
  return (
    <Button onClick={showToast} variant="outline">
      Show Toast
    </Button>
  );
}
