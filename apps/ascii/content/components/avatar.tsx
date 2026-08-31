import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Avatar",
  description: "An image with a fallback for the user.",
  sections: [
    {
      title: "default",
      code: `<Avatar>
  <AvatarFallback>SB</AvatarFallback>
</Avatar>`,
      preview: (
        <Avatar>
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
      ),
    },
    {
      title: "with image",
      description: "The fallback shows until the image loads, or if it fails.",
      code: `<Avatar>
  <AvatarImage src="/avatar.png" alt="User avatar" />
  <AvatarFallback>PA</AvatarFallback>
</Avatar>`,
      preview: (
        <Avatar>
          <AvatarImage
            alt="User avatar"
            src="https://api.dicebear.com/9.x/glass/svg?seed=paper"
          />
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
      ),
    },
    {
      title: "group",
      code: `<AvatarGroup>
  <Avatar>
    <AvatarFallback>SB</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AK</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>MT</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>3</AvatarGroupCount>
</AvatarGroup>`,
      preview: (
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MT</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>3</AvatarGroupCount>
        </AvatarGroup>
      ),
    },
  ],
};
