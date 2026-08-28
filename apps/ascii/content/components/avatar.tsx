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
      title: "example",
      code: `<Avatar>
  <AvatarFallback>SB</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarImage src="/avatar.png" alt="User avatar" />
  <AvatarFallback>PA</AvatarFallback>
</Avatar>`,
      preview: (
        <div className="flex items-center gap-[2ch]">
          <Avatar>
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              alt="User avatar"
              src="https://api.dicebear.com/9.x/glass/svg?seed=paper"
            />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
        </div>
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
