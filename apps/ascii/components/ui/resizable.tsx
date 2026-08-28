"use client";

import * as React from "react";

import { AsciiVRule } from "@/components/ascii/ascii-box";
import { cn } from "@/lib/utils";

type ResizableContextValue = {
  leftWidth: number;
  rightWidth: number;
  onHandlePointerDown: (event: React.PointerEvent) => void;
  onHandleKeyDown: (event: React.KeyboardEvent) => void;
};

const ResizableContext = React.createContext<ResizableContextValue | null>(
  null
);

function useResizableContext(component: string) {
  const context = React.useContext(ResizableContext);
  if (!context) {
    throw new Error(`${component} must be used within <ResizablePanelGroup>`);
  }
  return context;
}

/**
 * Manages a draggable split between two children. AsciiBox frames are
 * fixed-character-width (their borders are literal repeated "-" glyphs),
 * so the split is tracked in whole characters rather than fluid pixels —
 * dragging regrows/shrinks each panel's ASCII border one column at a time.
 * Renders a `<div>` element.
 */
function ResizablePanelGroup({
  className,
  totalWidth = 61,
  defaultLeftWidth = 30,
  minWidth = 12,
  ...props
}: React.ComponentProps<"div"> & {
  totalWidth?: number;
  defaultLeftWidth?: number;
  minWidth?: number;
}) {
  const [leftWidth, setLeftWidth] = React.useState(defaultLeftWidth);
  const groupRef = React.useRef<HTMLDivElement>(null);
  const draggingRef = React.useRef(false);
  const maxLeftWidth = totalWidth - minWidth - 1;

  const clamp = React.useCallback(
    (value: number) => Math.min(maxLeftWidth, Math.max(minWidth, value)),
    [maxLeftWidth, minWidth]
  );

  const onHandlePointerDown = React.useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    draggingRef.current = true;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }, []);

  const onHandleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const step = event.shiftKey ? 5 : 1;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setLeftWidth((w) => clamp(w - step));
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setLeftWidth((w) => clamp(w + step));
      }
    },
    [clamp]
  );

  React.useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!draggingRef.current || !groupRef.current) return;
      const rect = groupRef.current.getBoundingClientRect();
      const percent = (event.clientX - rect.left) / rect.width;
      setLeftWidth(clamp(Math.round(totalWidth * percent)));
    }
    function onPointerUp() {
      draggingRef.current = false;
    }
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [clamp, totalWidth]);

  return (
    <ResizableContext.Provider
      value={{
        leftWidth,
        rightWidth: totalWidth - leftWidth - 1,
        onHandlePointerDown,
        onHandleKeyDown,
      }}
    >
      <div
        ref={groupRef}
        data-slot="resizable-panel-group"
        className={cn("inline-flex w-fit self-start font-mono", className)}
        {...props}
      />
    </ResizableContext.Provider>
  );
}

function ResizablePanel({
  className,
  side,
  children,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  side: "start" | "end";
  children: (chWidth: number) => React.ReactNode;
}) {
  const { leftWidth, rightWidth } = useResizableContext("ResizablePanel");
  const chWidth = side === "start" ? leftWidth : rightWidth;

  return (
    <div
      data-slot="resizable-panel"
      className={cn("shrink-0", className)}
      {...props}
    >
      {children(chWidth)}
    </div>
  );
}

function ResizableHandle({ className, ...props }: React.ComponentProps<"div">) {
  const { onHandlePointerDown, onHandleKeyDown } =
    useResizableContext("ResizableHandle");

  return (
    <div
      data-slot="resizable-handle"
      role="separator"
      aria-orientation="vertical"
      tabIndex={0}
      onPointerDown={onHandlePointerDown}
      onKeyDown={onHandleKeyDown}
      className={cn(
        "relative z-10 -mx-[1ch] w-[1ch] shrink-0 cursor-col-resize touch-none bg-background text-ascii-comment outline-none select-none hover:text-primary focus-visible:text-primary active:text-primary",
        className
      )}
      {...props}
    >
      {/* Absolutely positioned so the rule's glyph filler can't add
       * height of its own — the handle tracks the tallest panel. */}
      <AsciiVRule className="pointer-events-none absolute inset-0 text-inherit" />
    </div>
  );
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
