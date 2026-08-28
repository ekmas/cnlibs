import { MessageScrollerDemo } from "./demos/message-scroller-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Message Scroller",
  description: "Auto-sticks to bottom, jumps to unread messages.",
  sections: [
    {
      title: "example",
      code: `<MessageScroller>
  {entries.map((entry) => (
    <Message key={entry.id}>
      <MessageAvatar>
        <AvatarFallback>{entry.initials}</AvatarFallback>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>
          <MessageAuthor>{entry.author}</MessageAuthor>
          <MessageTimestamp>{entry.time}</MessageTimestamp>
        </MessageHeader>
        <MessageBody>{entry.body}</MessageBody>
      </MessageContent>
    </Message>
  ))}
</MessageScroller>`,
      preview: <MessageScrollerDemo />,
    },
  ],
};
