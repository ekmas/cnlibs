import { ToastActionDemo } from "@/components/docs/examples/toast-action-demo";
import { ToastDemo } from "@/components/docs/examples/toast-demo";
import { ToastPromiseDemo } from "@/components/docs/examples/toast-promise-demo";
import { ToastTypesDemo } from "@/components/docs/examples/toast-types-demo";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Toast";
export const description = "A succinct message that is displayed temporarily.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/toast",
};

export const usageNote = {
  code: `import { Toaster } from "@/components/ui/toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}`,
  description: "Add the Toaster component to your app's layout.tsx.",
};

export const variants: DocVariant[] = [
  {
    code: `"use client";

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
}`,
    description:
      "Call toast.add from anywhere in the app to queue a notification. The Toaster is already mounted globally in the root layout.",
    id: "default",
    preview: <ToastDemo />,
    title: "Default",
  },
  {
    code: `"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

function showSuccessToast() {
  toast.add({
    description: "Your changes have been saved.",
    title: "Event created",
    type: "success",
  });
}

function showInfoToast() {
  toast.add({
    description: "A new version of the app is available.",
    title: "Update available",
    type: "info",
  });
}

function showWarningToast() {
  toast.add({
    description: "Your session is about to expire.",
    title: "Session expiring",
    type: "warning",
  });
}

function showErrorToast() {
  toast.add({
    description: "Could not save your changes.",
    title: "Something went wrong",
    type: "error",
  });
}

function showLoadingToast() {
  toast.add({
    description: "This may take a moment.",
    title: "Fetching data",
    type: "loading",
  });
}

export function ToastTypesDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={showSuccessToast} variant="outline">
        Success
      </Button>
      <Button onClick={showInfoToast} variant="outline">
        Info
      </Button>
      <Button onClick={showWarningToast} variant="outline">
        Warning
      </Button>
      <Button onClick={showErrorToast} variant="outline">
        Error
      </Button>
      <Button onClick={showLoadingToast} variant="outline">
        Loading
      </Button>
    </div>
  );
}`,
    description:
      "Set the type option to render a status icon. The built-in renderer recognizes success, info, warning, error, and loading.",
    id: "types",
    preview: <ToastTypesDemo />,
    title: "Types",
  },
  {
    code: `"use client";

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
}`,
    description: "Pass button props with actionProps to render an action.",
    id: "action",
    preview: <ToastActionDemo />,
    title: "Action",
  },
  {
    code: `"use client";

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
    success: (data) => \`Event "\${data.name}" created\`,
  });
}

export function ToastPromiseDemo() {
  return (
    <Button onClick={showToast} variant="outline">
      Create Event
    </Button>
  );
}`,
    description:
      "Use toast.promise to update one toast as an asynchronous task moves through loading, success, and error states.",
    id: "promise",
    preview: <ToastPromiseDemo />,
    title: "Promise",
  },
];
