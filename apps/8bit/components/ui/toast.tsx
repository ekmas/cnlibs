"use client";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import {
  CircleCheckIcon,
  InfoIcon,
  OctagonXIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

const toast = ToastPrimitive.createToastManager();

const TOAST_TYPE_ICONS: Record<string, React.ReactNode> = {
  success: <CircleCheckIcon className="size-4" />,
  info: <InfoIcon className="size-4 text-muted-foreground" />,
  warning: <TriangleAlertIcon className="size-4" />,
  error: <OctagonXIcon className="size-4 text-destructive" />,
  loading: <Spinner className="size-4" />,
};

function ToastProvider({
  toastManager = toast,
  ...props
}: ToastPrimitive.Provider.Props) {
  return (
    <ToastPrimitive.Provider
      data-slot="toast-provider"
      toastManager={toastManager}
      {...props}
    />
  );
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />;
}

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        "fixed inset-x-4 bottom-4 z-50 mx-auto flex w-auto max-w-[calc(100%-2rem)] flex-col outline-none sm:inset-x-auto sm:right-4 sm:w-[22.5rem]",
        className
      )}
      {...props}
    />
  );
}

function Toast({
  className,
  swipeDirection = ["down", "right"],
  ...props
}: ToastPrimitive.Root.Props) {
  return (
    <ToastPrimitive.Root
      data-slot="toast"
      swipeDirection={swipeDirection}
      className={cn(
        "[--gap:0.75rem] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] absolute inset-x-0 bottom-0 z-[calc(1000-var(--toast-index))] h-[var(--height)] w-full origin-bottom px-rounded-md px-border-md [--pixel-size:5px] [--px-border-color:color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-popover text-popover-foreground shadow-lg outline-none select-none [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s] after:absolute after:inset-x-0 after:top-full after:h-[calc(var(--gap)+1px)] after:content-[''] focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring data-ending-style:opacity-0 data-expanded:h-[var(--toast-height)] data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))] data-limited:opacity-0 data-starting-style:[transform:translateY(150%)] data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]",
        className
      )}
      {...props}
    />
  );
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      className={cn(
        "relative flex h-full items-start gap-3 overflow-hidden p-4 pr-10 transition-opacity duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
        className
      )}
      {...props}
    />
  );
}

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn("font-medium text-sm", className)}
      {...props}
    />
  );
}

function ToastDescription({
  className,
  ...props
}: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function ToastAction({
  className,
  variant = "outline",
  size = "sm",
  ...props
}: ToastPrimitive.Action.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      className={cn("shrink-0 self-center", className)}
      render={<Button size={size} variant={variant} />}
      {...props}
    />
  );
}

function ToastClose({ className, ...props }: ToastPrimitive.Close.Props) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      className={cn("absolute top-1/2 right-2 -translate-y-1/2", className)}
      render={<Button size="icon-xs" variant="ghost" />}
      {...props}
    >
      <XIcon />
      <span className="sr-only">Dismiss</span>
    </ToastPrimitive.Close>
  );
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager();

  return toasts.map((item) => {
    const icon = item.type ? TOAST_TYPE_ICONS[item.type] : null;

    return (
      <Toast key={item.id} toast={item}>
        <ToastContent>
          {icon && (
            <span
              className="mt-0.5 flex shrink-0 items-center"
              data-slot="toast-icon"
            >
              {icon}
            </span>
          )}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <ToastTitle />
            <ToastDescription />
          </div>
          <ToastAction />
          <ToastClose />
        </ToastContent>
      </Toast>
    );
  });
}

function Toaster({ ...props }: ToastPrimitive.Provider.Props) {
  return (
    <ToastProvider {...props}>
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  );
}

const { useToastManager } = ToastPrimitive;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  Toaster,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  toast,
  useToastManager,
};
