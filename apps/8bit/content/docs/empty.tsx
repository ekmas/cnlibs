import { InboxIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Empty";
export const description =
  "Displays an empty state with an icon, title, and action.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/empty",
};

export const variants: DocVariant[] = [
  {
    code: `import { InboxIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyDemo() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No messages yet</EmptyTitle>
        <EmptyDescription>
          You don't have any messages yet. Start a conversation to see it
          here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Start a conversation</Button>
      </EmptyContent>
    </Empty>
  );
}`,
    description:
      "Combine EmptyMedia, EmptyTitle, and EmptyDescription to explain an empty state.",
    id: "default",
    preview: (
      <Empty className="w-full max-w-md border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <InboxIcon />
          </EmptyMedia>
          <EmptyTitle>No messages yet</EmptyTitle>
          <EmptyDescription>
            You don't have any messages yet. Start a conversation to see it
            here.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Start a conversation</Button>
        </EmptyContent>
      </Empty>
    ),
    title: "Default",
  },
];
