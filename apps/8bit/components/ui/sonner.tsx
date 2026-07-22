"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group font-pixel!"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "0px",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "cn-toast font-pixel! px-rounded-sm px-border-sm [--pixel-size:5px] [--px-border-color:var(--border)]",
          closeButton: "px-rounded-sm! [border-radius:0px]! [--pixel-size:2px]",
          actionButton: "px-rounded-sm! [border-radius:0px]! [--pixel-size:2px]",
          cancelButton: "px-rounded-sm! [border-radius:0px]! [--pixel-size:2px]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
