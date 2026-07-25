"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

function createEvent() {
  return new Promise<{ name: string }>((resolve) => {
    setTimeout(() => resolve({ name: "Sunday, December 3" }), 2000);
  });
}

function showToast() {
  toast.promise(createEvent(), {
    error: "Failed to create event",
    loading: "Creating event...",
    success: (data) => `Event "${data.name}" created`,
  });
}

export function ToastPromiseDemo() {
  return (
    <Button onClick={showToast} variant="outline">
      Create Event
    </Button>
  );
}
