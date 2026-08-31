import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

function Message({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message"
      className={cn("flex items-start gap-[1ch]", className)}
      {...props}
    />
  );
}

function MessageAvatar({
  className,
  ...props
}: React.ComponentProps<typeof Avatar>) {
  return <Avatar data-slot="message-avatar" className={className} {...props} />;
}

function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={cn("flex min-w-0 flex-1 flex-col", className)}
      {...props}
    />
  );
}

function MessageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-header"
      className={cn("flex items-baseline gap-[1ch]", className)}
      {...props}
    />
  );
}

function MessageAuthor({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="message-author"
      className={cn("font-heading text-primary", className)}
      {...props}
    />
  );
}

function MessageTimestamp({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="message-timestamp"
      className={cn("text-ascii-comment", className)}
      {...props}
    />
  );
}

function MessageBody({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="message-body"
      className={cn("text-ascii-soft", className)}
      {...props}
    />
  );
}

export {
  Message,
  MessageAuthor,
  MessageAvatar,
  MessageBody,
  MessageContent,
  MessageHeader,
  MessageTimestamp,
};
