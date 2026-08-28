"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BOTTOM_THRESHOLD_PX = 24;

function MessageScroller({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = React.useState(true);
  const [unreadCount, setUnreadCount] = React.useState(0);
  const childCount = React.Children.count(children);
  const prevChildCount = React.useRef(childCount);

  const scrollToBottom = React.useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      viewport.scrollTo({ top: viewport.scrollHeight, behavior });
      setUnreadCount(0);
    },
    []
  );

  const handleScroll = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const distanceFromBottom =
      viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight;
    const atBottom = distanceFromBottom <= BOTTOM_THRESHOLD_PX;
    setIsAtBottom(atBottom);
    if (atBottom) setUnreadCount(0);
  }, []);

  React.useEffect(() => {
    const grew = childCount > prevChildCount.current;
    prevChildCount.current = childCount;

    if (!grew) return;

    if (isAtBottom) {
      scrollToBottom("smooth");
    } else {
      setUnreadCount(
        (count) => count + (childCount - prevChildCount.current || 1)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childCount]);

  React.useEffect(() => {
    scrollToBottom("instant");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      data-slot="message-scroller"
      className={cn("relative flex min-h-0 flex-1 flex-col", className)}
      {...props}
    >
      <div
        ref={viewportRef}
        onScroll={handleScroll}
        data-slot="message-scroller-viewport"
        className="no-scrollbar flex min-h-0 flex-1 flex-col gap-[1lh] overflow-y-auto outline-none"
      >
        {children}
      </div>
      {!isAtBottom && (
        <div className="pointer-events-none absolute inset-x-0 bottom-1 flex justify-center">
          <Button
            variant="secondary"
            className="pointer-events-auto bg-background"
            onClick={() => scrollToBottom("smooth")}
          >
            v {unreadCount > 0 ? `${unreadCount} new` : "jump to latest"}
          </Button>
        </div>
      )}
    </div>
  );
}

export { MessageScroller };
