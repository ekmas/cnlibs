"use client";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import { AsciiBox } from "@/components/ascii/ascii-box";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

type ToastVariant = "default" | "success" | "error";

const toastToneClass: Record<ToastVariant, string> = {
  default: "text-card-foreground",
  success: "text-primary",
  error: "text-destructive",
};

function toastVariant(type: string | undefined): ToastVariant {
  if (type === "success") return "success";
  if (type === "error" || type === "destructive") return "error";
  return "default";
}

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider data-slot="toast-provider" {...props} />;
}

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Portal data-slot="toast-portal">
      <ToastPrimitive.Viewport
        data-slot="toast-viewport"
        className={cn(
          "fixed top-[2ch] right-[2ch] z-50 flex w-[42ch] flex-col gap-[1lh] outline-none",
          className
        )}
        {...props}
      />
    </ToastPrimitive.Portal>
  );
}

/** Renders every active toast from `useToastManager()` into a viewport
 * positioned in the top-right corner. Mount once, near the app root, inside
 * a `<ToastProvider>`. */
function Toaster({ width = 42 }: { width?: number }) {
  const { toasts } = ToastPrimitive.useToastManager();

  return (
    <ToastViewport>
      {toasts.map((toast) => {
        const variant = toastVariant(toast.type);
        return (
          <ToastPrimitive.Root
            key={toast.id}
            toast={toast}
            data-slot="toast"
            className="outline-none"
          >
            <AsciiBox
              width={width}
              tone={variant === "error" ? "primary" : "soft"}
              padY={0}
              className={cn("relative bg-card", toastToneClass[variant])}
              contentClassName="flex flex-col pr-[2ch]"
            >
              {toast.title && (
                <ToastPrimitive.Title
                  data-slot="toast-title"
                  className="flex items-center gap-[1ch] font-heading"
                >
                  {/* toastManager.promise() sets type "loading" while pending. */}
                  {toast.type === "loading" && <Spinner aria-hidden />}
                  {toast.title}
                </ToastPrimitive.Title>
              )}
              {toast.description && (
                <ToastPrimitive.Description
                  data-slot="toast-description"
                  className="mt-[1lh] text-ascii-comment"
                >
                  {toast.description}
                </ToastPrimitive.Description>
              )}
              <ToastPrimitive.Close
                data-slot="toast-close"
                aria-label="Dismiss"
                className="absolute top-0 right-[2ch] bg-card font-mono text-muted-foreground outline-none select-none hover:text-foreground focus-visible:text-foreground"
              >
                [x]
              </ToastPrimitive.Close>
            </AsciiBox>
          </ToastPrimitive.Root>
        );
      })}
    </ToastViewport>
  );
}

export { Toaster, ToastProvider, ToastViewport };
