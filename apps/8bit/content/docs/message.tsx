import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/components/ui/message";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Message";
export const description = "Displays a chat message with avatar and content.";

export const variants: DocVariant[] = [
  {
    code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/components/ui/message";

export function MessageDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Message>
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Assistant</MessageHeader>
          <Bubble variant="secondary">
            <BubbleContent>
              Here's a summary of the pull request you asked for.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>You</MessageHeader>
          <Bubble>
            <BubbleContent>Thanks, that looks great!</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  );
}`,
    description:
      "Set align to end to flip a message to the opposite side of the conversation.",
    id: "default",
    preview: (
      <div className="flex w-full max-w-md flex-col gap-6">
        <Message>
          <MessageAvatar>
            <Avatar size="sm">
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>Assistant</MessageHeader>
            <Bubble variant="secondary">
              <BubbleContent>
                Here's a summary of the pull request you asked for.
              </BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageAvatar>
            <Avatar size="sm">
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>You</MessageHeader>
            <Bubble>
              <BubbleContent>Thanks, that looks great!</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </div>
    ),
    title: "Default",
  },
];
