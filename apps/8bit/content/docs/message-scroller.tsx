import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Message Scroller";
export const description =
  "A scroll container that keeps chat messages pinned to the bottom.";

export const variants: DocVariant[] = [
  {
    code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";

export function MessageScrollerDemo() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-56 w-full max-w-md px-rounded-sm px-border-sm [--pixel-size:3px]">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            <MessageScrollerItem>
              <Message>
                <MessageAvatar>
                  <Avatar size="sm">
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                </MessageAvatar>
                <MessageContent>
                  <Bubble variant="secondary">
                    <BubbleContent>Welcome! Ask me anything.</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
            <MessageScrollerItem>
              <Message align="end">
                <MessageContent>
                  <Bubble>
                    <BubbleContent>How do I resize a panel?</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
            <MessageScrollerItem scrollAnchor>
              <Message>
                <MessageAvatar>
                  <Avatar size="sm">
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                </MessageAvatar>
                <MessageContent>
                  <Bubble variant="secondary">
                    <BubbleContent>
                      Drag the handle between the Resizable panels.
                    </BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}`,
    description:
      "Wrap messages in a Provider and mark the last item with scrollAnchor to keep the view pinned to it.",
    id: "default",
    preview: (
      <MessageScrollerProvider>
        <MessageScroller className="h-56 w-full max-w-md px-border-sm px-rounded-sm [--pixel-size:3px]">
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              <MessageScrollerItem>
                <Message>
                  <MessageAvatar>
                    <Avatar size="sm">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble variant="secondary">
                      <BubbleContent>Welcome! Ask me anything.</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
              <MessageScrollerItem>
                <Message align="end">
                  <MessageContent>
                    <Bubble>
                      <BubbleContent>How do I resize a panel?</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
              <MessageScrollerItem scrollAnchor>
                <Message>
                  <MessageAvatar>
                    <Avatar size="sm">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble variant="secondary">
                      <BubbleContent>
                        Drag the handle between the Resizable panels.
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    ),
    title: "Default",
  },
];
