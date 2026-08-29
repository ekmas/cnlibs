"use client";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import { Button } from "@/components/ui/button";
import { Toaster, ToastProvider } from "@/components/ui/toast";

function ToastTriggers() {
  const toastManager = ToastPrimitive.useToastManager();

  return (
    <div className="flex flex-wrap gap-[1ch]">
      <Button
        onClick={() =>
          toastManager.add({
            title: "Deployment queued",
            description: "main@a1b2c3d will build in ~40s.",
          })
        }
      >
        Trigger toast
      </Button>
      <Button
        onClick={() =>
          toastManager.add({
            type: "success",
            title: "Deployment live",
            description: "v1.4.2 is now serving production traffic.",
          })
        }
        variant="outline"
      >
        Trigger success
      </Button>
      <Button
        onClick={() =>
          toastManager.add({
            type: "error",
            title: "Build failed",
            description: "Exit code 1 — see logs for details.",
          })
        }
        variant="destructive"
      >
        Trigger error
      </Button>
    </div>
  );
}

function ToastPromiseTriggers() {
  const toastManager = ToastPrimitive.useToastManager();

  const fire = (outcome: "success" | "error") =>
    toastManager
      .promise(
        new Promise<string>((resolve, reject) => {
          setTimeout(() => {
            if (outcome === "success") {
              resolve("v1.4.3");
            } else {
              reject(new Error("upstream timeout"));
            }
          }, 1800);
        }),
        {
          loading: { title: "Deploying...", description: "Uploading build." },
          success: (version) => ({
            title: "Deployment live",
            description: `${version} is now serving production traffic.`,
          }),
          error: (error: Error) => ({
            title: "Deployment failed",
            description: error.message,
          }),
        }
      )
      .catch(() => undefined);

  return (
    <div className="flex flex-wrap gap-[1ch]">
      <Button onClick={() => fire("success")} variant="outline">
        Promise → success
      </Button>
      <Button onClick={() => fire("error")} variant="outline">
        Promise → error
      </Button>
      <Button
        onClick={() =>
          toastManager.add({
            title: "Sticky notice",
            description: "timeout={0} keeps it until dismissed.",
            timeout: 0,
          })
        }
        variant="ghost"
      >
        Persistent
      </Button>
    </div>
  );
}

export function ToastDemo() {
  return (
    <ToastProvider>
      <p className="text-ascii-comment">
        {"// fires a toast in the top-right corner"}
      </p>
      <ToastTriggers />
      <Toaster />
    </ToastProvider>
  );
}

export function ToastPromiseDemo() {
  return (
    <ToastProvider>
      <p className="text-ascii-comment">
        {"// one toast that updates as the promise settles"}
      </p>
      <ToastPromiseTriggers />
      <Toaster />
    </ToastProvider>
  );
}
