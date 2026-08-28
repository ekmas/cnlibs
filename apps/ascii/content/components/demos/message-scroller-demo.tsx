"use client";

import * as React from "react";

import { AsciiBox } from "@/components/ascii/ascii-box";
import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Message,
  MessageAuthor,
  MessageAvatar,
  MessageBody,
  MessageContent,
  MessageHeader,
  MessageTimestamp,
} from "@/components/ui/message";
import { MessageScroller } from "@/components/ui/message-scroller";

type Entry = {
  id: number;
  author: string;
  initials: string;
  time: string;
  body: string;
};

const seed: Entry[] = [
  {
    id: 1,
    author: "sam",
    initials: "SB",
    time: "09:41",
    body: "Kicking off the release build now.",
  },
  {
    id: 2,
    author: "mia",
    initials: "MK",
    time: "09:44",
    body: "I'll watch the error rate dashboard while it rolls out.",
  },
  {
    id: 3,
    author: "deploy-bot",
    initials: "DB",
    time: "09:45",
    body: "Build queued — commit 8f3a1c2.",
  },
  {
    id: 4,
    author: "sam",
    initials: "SB",
    time: "09:47",
    body: "Tests are green, 214/214.",
  },
  {
    id: 5,
    author: "deploy-bot",
    initials: "DB",
    time: "09:49",
    body: "Staging deploy complete.",
  },
  {
    id: 6,
    author: "mia",
    initials: "MK",
    time: "09:52",
    body: "Smoke-tested checkout, looks good.",
  },
  {
    id: 7,
    author: "sam",
    initials: "SB",
    time: "09:55",
    body: "Promoting to production.",
  },
];

export function MessageScrollerDemo() {
  const [entries, setEntries] = React.useState(seed);

  const addMessage = () => {
    setEntries((current) => {
      const next = current.length + 1;
      return [
        ...current,
        {
          id: next,
          author: "deploy-bot",
          initials: "DB",
          time: `10:0${next % 10}`,
          body: `Production deploy ${next - seed.length}: rollout at 100%.`,
        },
      ];
    });
  };

  return (
    <>
      <AsciiBox
        contentClassName="flex h-72 flex-col"
        title="#deploys"
        tone="primary"
        width={48}
      >
        <MessageScroller>
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
        </MessageScroller>
      </AsciiBox>
      <div>
        <Button onClick={addMessage} variant="outline">
          Send test message
        </Button>
      </div>
    </>
  );
}
