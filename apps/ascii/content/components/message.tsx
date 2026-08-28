import { AsciiBox } from "@/components/ascii/ascii-box";
import { AvatarFallback } from "@/components/ui/avatar";
import {
  Message,
  MessageAuthor,
  MessageAvatar,
  MessageBody,
  MessageContent,
  MessageHeader,
  MessageTimestamp,
} from "@/components/ui/message";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Message",
  description: "A chat message with avatar, header and body.",
  sections: [
    {
      title: "example",
      code: `<Message>
  <MessageAvatar>
    <AvatarFallback>SB</AvatarFallback>
  </MessageAvatar>
  <MessageContent>
    <MessageHeader>
      <MessageAuthor>sam</MessageAuthor>
      <MessageTimestamp>09:41</MessageTimestamp>
    </MessageHeader>
    <MessageBody>
      Kicking off the release build now, should be up in ~4 min.
    </MessageBody>
  </MessageContent>
</Message>

<Message>
  <MessageAvatar>
    <AvatarFallback>MK</AvatarFallback>
  </MessageAvatar>
  <MessageContent>
    <MessageHeader>
      <MessageAuthor>mia</MessageAuthor>
      <MessageTimestamp>09:44</MessageTimestamp>
    </MessageHeader>
    <MessageBody>
      Nice, I'll watch the error rate dashboard while it rolls out.
    </MessageBody>
  </MessageContent>
</Message>`,
      preview: (
        <AsciiBox
          contentClassName="flex flex-col gap-[1lh]"
          title="#deploys"
          tone="primary"
          width={48}
        >
          <Message>
            <MessageAvatar>
              <AvatarFallback>SB</AvatarFallback>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>
                <MessageAuthor>sam</MessageAuthor>
                <MessageTimestamp>09:41</MessageTimestamp>
              </MessageHeader>
              <MessageBody>
                Kicking off the release build now, should be up in ~4 min.
              </MessageBody>
            </MessageContent>
          </Message>
          <Message>
            <MessageAvatar>
              <AvatarFallback>MK</AvatarFallback>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>
                <MessageAuthor>mia</MessageAuthor>
                <MessageTimestamp>09:44</MessageTimestamp>
              </MessageHeader>
              <MessageBody>
                Nice, I&apos;ll watch the error rate dashboard while it rolls
                out.
              </MessageBody>
            </MessageContent>
          </Message>
        </AsciiBox>
      ),
    },
  ],
};
