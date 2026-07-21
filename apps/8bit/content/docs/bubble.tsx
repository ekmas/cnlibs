import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Bubble";
export const description =
  "A chat bubble for displaying messages in a conversation.";

export const variants: DocVariant[] = [
  {
    code: `import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble";

export function BubbleDemo() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble align="start" variant="muted">
        <BubbleContent>
          Hey! Are we still on for the demo tomorrow?
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Yes, 10am works for me.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  );
}`,
    description:
      "Align bubbles to start or end to represent the two sides of a conversation.",
    id: "default",
    preview: (
      <BubbleGroup className="w-full max-w-md">
        <Bubble align="start" variant="muted">
          <BubbleContent>
            Hey! Are we still on for the demo tomorrow?
          </BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>Yes, 10am works for me.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    ),
    title: "Default",
  },
  {
    code: `import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/components/ui/bubble";

export function BubbleWithReactionsDemo() {
  return (
    <Bubble align="start" className="mb-3" variant="muted">
      <BubbleContent>Nice work on the release!</BubbleContent>
      <BubbleReactions>🎉 2</BubbleReactions>
    </Bubble>
  );
}`,
    description: "Attach a reactions pill to the bottom of a bubble.",
    id: "with-reactions",
    preview: (
      <Bubble align="start" className="mb-3" variant="muted">
        <BubbleContent>Nice work on the release!</BubbleContent>
        <BubbleReactions>🎉 2</BubbleReactions>
      </Bubble>
    ),
    title: "With Reactions",
  },
];
