import { AsciiBox, AsciiBoxRow } from "@/components/ascii/ascii-box";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import type { ComponentDoc } from "./types";

const teammates = [
  { initials: "SB", name: "Samuel Breznjak", role: "Owner" },
  { initials: "MK", name: "Mia Kowalski", role: "Maintainer" },
  { initials: "DT", name: "Dev Tran", role: "Contributor" },
];

export const doc: ComponentDoc = {
  title: "Item",
  description: "A composable row: title, description and actions.",
  sections: [
    {
      title: "variants",
      code: `<Item>
  <ItemContent>
    <ItemTitle>Text only</ItemTitle>
    <ItemDescription>Just a title and a description.</ItemDescription>
  </ItemContent>
</Item>

<Item>
  <ItemMedia>
    <Avatar>
      <AvatarFallback>SB</AvatarFallback>
    </Avatar>
  </ItemMedia>
  <ItemContent>
    <ItemTitle>With media and actions</ItemTitle>
    <ItemDescription>Avatar on the left, button on the right.</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost">Open</Button>
  </ItemActions>
</Item>`,
      preview: (
        <>
          <Item className="w-full max-w-md">
            <ItemContent>
              <ItemTitle>Text only</ItemTitle>
              <ItemDescription>Just a title and a description.</ItemDescription>
            </ItemContent>
          </Item>
          <Item className="w-full max-w-md">
            <ItemMedia>
              <Avatar>
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>With media and actions</ItemTitle>
              <ItemDescription>
                Avatar on the left, button on the right.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost">Open</Button>
            </ItemActions>
          </Item>
        </>
      ),
    },
    {
      title: "example",
      code: `<AsciiBox width={44} title="Team members" tone="primary">
  <div className="flex flex-col">
    {teammates.map((teammate) => (
      <AsciiBoxRow key={teammate.initials}>
        <Item>
          <ItemMedia>
            <Avatar>
              <AvatarFallback>{teammate.initials}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{teammate.name}</ItemTitle>
            <ItemDescription>{teammate.role}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost">Remove</Button>
          </ItemActions>
        </Item>
      </AsciiBoxRow>
    ))}
  </div>
</AsciiBox>`,
      preview: (
        <AsciiBox title="Team members" tone="primary" width={44}>
          <div className="flex flex-col">
            {teammates.map((teammate, i) => (
              <AsciiBoxRow key={teammate.initials}>
                <Item>
                  <ItemMedia>
                    <Avatar>
                      <AvatarFallback>{teammate.initials}</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{teammate.name}</ItemTitle>
                    <ItemDescription>{teammate.role}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button variant="ghost">
                      {i === 0 ? "You" : "Remove"}
                    </Button>
                  </ItemActions>
                </Item>
              </AsciiBoxRow>
            ))}
          </div>
        </AsciiBox>
      ),
    },
  ],
};
