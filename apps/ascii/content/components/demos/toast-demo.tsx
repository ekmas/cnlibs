"use client";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Toaster, ToastProvider } from "@/components/ui/toast";

type Manager = ReturnType<typeof ToastPrimitive.useToastManager>;

/** One trigger button inside its own provider + viewport, so each
 * docs example fires toasts independently. */
function ToastExample({
  label,
  variant = "default",
  onTrigger,
}: {
  label: ReactNode;
  variant?: "default" | "outline" | "ghost" | "destructive";
  onTrigger: (manager: Manager) => void;
}) {
  return (
    <ToastProvider>
      <ToastTrigger label={label} onTrigger={onTrigger} variant={variant} />
      <Toaster />
    </ToastProvider>
  );
}

function ToastTrigger({
  label,
  variant,
  onTrigger,
}: {
  label: ReactNode;
  variant: "default" | "outline" | "ghost" | "destructive";
  onTrigger: (manager: Manager) => void;
}) {
  const toastManager = ToastPrimitive.useToastManager();
  return (
    <Button onClick={() => onTrigger(toastManager)} variant={variant}>
      {label}
    </Button>
  );
}

export function ToastDemo() {
  return (
    <ToastExample
      label="Trigger toast"
      onTrigger={(manager) =>
        manager.add({
          title: "Deployment queued",
          description: "main@a1b2c3d will build in ~40s.",
        })
      }
    />
  );
}

export function ToastSuccessDemo() {
  return (
    <ToastExample
      label="Trigger success"
      onTrigger={(manager) =>
        manager.add({
          type: "success",
          title: "Deployment live",
          description: "v1.4.2 is now serving production traffic.",
        })
      }
      variant="outline"
    />
  );
}

export function ToastErrorDemo() {
  return (
    <ToastExample
      label="Trigger error"
      onTrigger={(manager) =>
        manager.add({
          type: "error",
          title: "Build failed",
          description: "Exit code 1 — see logs for details.",
        })
      }
      variant="destructive"
    />
  );
}

function deploy(outcome: "success" | "error") {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (outcome === "success") {
        resolve("v1.4.3");
      } else {
        reject(new Error("upstream timeout"));
      }
    }, 1800);
  });
}

const promiseOptions = {
  loading: { title: "Deploying...", description: "Uploading build." },
  success: (version: string) => ({
    title: "Deployment live",
    description: `${version} is now serving production traffic.`,
  }),
  error: (error: Error) => ({
    title: "Deployment failed",
    description: error.message,
  }),
};

export function ToastPromiseDemo() {
  return (
    <div className="flex flex-wrap gap-[1ch]">
      <ToastExample
        label="Promise → success"
        onTrigger={(manager) =>
          manager.promise(deploy("success"), promiseOptions).catch(() => {})
        }
        variant="outline"
      />
      <ToastExample
        label="Promise → error"
        onTrigger={(manager) =>
          manager.promise(deploy("error"), promiseOptions).catch(() => {})
        }
        variant="outline"
      />
    </div>
  );
}

export function ToastPersistentDemo() {
  return (
    <ToastExample
      label="Persistent"
      onTrigger={(manager) =>
        manager.add({
          title: "Sticky notice",
          description: "timeout: 0 keeps it until dismissed.",
          timeout: 0,
        })
      }
      variant="ghost"
    />
  );
}
