import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Avatar";
export const description =
  "An image element with a fallback for representing the user.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/avatar",
};

export const variants: DocVariant[] = [
  {
    code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}`,
    description:
      "Renders the image when it loads, falling back to the fallback content otherwise.",
    id: "default",
    preview: (
      <Avatar>
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    title: "Default",
  },
  {
    code: `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarGroupDemo() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage alt="@vercel" src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>KL</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  );
}`,
    description: "Stack avatars together with an overflow count.",
    id: "group",
    preview: (
      <AvatarGroup>
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage alt="@vercel" src="https://github.com/vercel.png" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>KL</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    ),
    title: "Group",
  },
];
