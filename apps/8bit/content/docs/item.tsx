import { BellIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Item";
export const description =
  "A flexible list item with media, content, and actions.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/item",
};

export const variants: DocVariant[] = [
  {
    code: `import { BellIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

export function ItemDemo() {
  return (
    <ItemGroup className="w-full max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>New comment</ItemTitle>
          <ItemDescription>Someone replied to your post.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            View
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <MailIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>New message</ItemTitle>
          <ItemDescription>You have a new direct message.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            View
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  );
}`,
    description:
      "Group items with an icon, title, description, and trailing actions.",
    id: "default",
    preview: (
      <ItemGroup className="w-full max-w-md">
        <Item variant="outline">
          <ItemMedia variant="icon">
            <BellIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>New comment</ItemTitle>
            <ItemDescription>Someone replied to your post.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              View
            </Button>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item variant="outline">
          <ItemMedia variant="icon">
            <MailIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>New message</ItemTitle>
            <ItemDescription>You have a new direct message.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              View
            </Button>
          </ItemActions>
        </Item>
      </ItemGroup>
    ),
    title: "Default",
  },
];
