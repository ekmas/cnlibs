import { SonnerDemo } from "@/components/docs/examples/sonner-demo";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Sonner";
export const description = "An opinionated toast component for React.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/sonner",
};

export const variants: DocVariant[] = [
  {
    code: `"use client";

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
}`,
    description:
      "Call the toast function from sonner to show a notification. The Toaster is already mounted globally in the root layout.",
    id: "default",
    preview: <SonnerDemo />,
    title: "Default",
  },
];
