"use client";

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
}
