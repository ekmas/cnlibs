import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import type { ComponentDoc } from "./types";

function SideSheet({ side }: { side: "top" | "right" | "bottom" | "left" }) {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost">{side}</Button>} />
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>side=&quot;{side}&quot;</SheetTitle>
          <SheetDescription>
            The sheet slides in from the {side} edge.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="outline">Close</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const sideCode = (side: string) => `<Sheet>
  <SheetTrigger render={<Button variant="ghost">${side}</Button>} />
  <SheetContent side="${side}">
    <SheetHeader>
      <SheetTitle>side="${side}"</SheetTitle>
      <SheetDescription>The sheet slides in from the ${side} edge.</SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose render={<Button variant="outline">Close</Button>} />
    </SheetFooter>
  </SheetContent>
</Sheet>`;

export const doc: ComponentDoc = {
  title: "Sheet",
  description: "Extends the dialog to display content on the edge.",
  sections: [
    {
      title: "default",
      code: `<Sheet>
  <SheetTrigger render={<Button variant="outline">Edit project</Button>} />
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit project</SheetTitle>
      <SheetDescription>
        Update the name and default branch for this project.
      </SheetDescription>
    </SheetHeader>
    <div className="flex flex-col gap-[1lh] px-[2ch]">
      <div className="flex flex-col">
        <Label htmlFor="name">Project name</Label>
        <Input id="name" chWidth={28} defaultValue="ascii-ui" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="branch">Default branch</Label>
        <Input id="branch" chWidth={28} defaultValue="main" />
      </div>
    </div>
    <SheetFooter>
      <Button>Save changes</Button>
      <SheetClose render={<Button variant="outline">Cancel</Button>} />
    </SheetFooter>
  </SheetContent>
</Sheet>`,
      preview: (
        <Sheet>
          <SheetTrigger
            render={<Button variant="outline">Edit project</Button>}
          />
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Edit project</SheetTitle>
              <SheetDescription>
                Update the name and default branch for this project.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-[1lh] px-[2ch]">
              <div className="flex flex-col">
                <Label htmlFor="sheet-name">Project name</Label>
                <Input chWidth={28} defaultValue="ascii-ui" id="sheet-name" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="sheet-branch">Default branch</Label>
                <Input chWidth={28} defaultValue="main" id="sheet-branch" />
              </div>
            </div>
            <SheetFooter>
              <Button>Save changes</Button>
              <SheetClose render={<Button variant="outline">Cancel</Button>} />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ),
    },
    {
      title: "left",
      code: sideCode("left"),
      preview: <SideSheet side="left" />,
    },
    {
      title: "top",
      code: sideCode("top"),
      preview: <SideSheet side="top" />,
    },
    {
      title: "bottom",
      code: sideCode("bottom"),
      preview: <SideSheet side="bottom" />,
    },
    {
      title: "without close button",
      description:
        "showCloseButton={false} drops the [x]; escape, the backdrop and SheetClose still dismiss it.",
      code: `<Sheet>
  <SheetTrigger render={<Button variant="ghost">Filters</Button>} />
  <SheetContent side="left" showCloseButton={false}>
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
      <SheetDescription>Dismiss with escape, the backdrop, or the footer button.</SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose render={<Button variant="outline">Done</Button>} />
    </SheetFooter>
  </SheetContent>
</Sheet>`,
      preview: (
        <Sheet>
          <SheetTrigger render={<Button variant="ghost">Filters</Button>} />
          <SheetContent showCloseButton={false} side="left">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Dismiss with escape, the backdrop, or the footer button.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose render={<Button variant="outline">Done</Button>} />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ),
    },
  ],
};
