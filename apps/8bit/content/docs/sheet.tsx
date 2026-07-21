import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Sheet";
export const description =
  "Extends the Dialog component to display content that complements the main content of the screen.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/sheet",
};

export const variants: DocVariant[] = [
  {
    code: `import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="outline">Close</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`,
    description:
      "Slides in from the right edge of the screen by default. Wrap a trigger and a SheetContent in a Sheet.",
    id: "default",
    preview: (
      <Sheet>
        <SheetTrigger render={<Button variant="outline">Open</Button>} />
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose render={<Button variant="outline">Close</Button>} />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ),
    title: "Default",
  },
  {
    code: `import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetLeftDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open Left</Button>} />
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            The side prop controls which edge the panel slides in from.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="outline">Close</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`,
    description:
      "Set the side prop to top, right, bottom, or left to change where the panel slides in from.",
    id: "left",
    preview: (
      <Sheet>
        <SheetTrigger render={<Button variant="outline">Open Left</Button>} />
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              The side prop controls which edge the panel slides in from.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose render={<Button variant="outline">Close</Button>} />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ),
    title: "Left",
  },
];
