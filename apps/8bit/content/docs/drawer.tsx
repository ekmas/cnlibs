import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Drawer";
export const description =
  "A panel that slides in from the edge of the screen.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/drawer",
};

export const variants: DocVariant[] = [
  {
    code: `import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline">Open Drawer</Button>} />
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Save changes</Button>
            <DrawerClose render={<Button variant="outline">Cancel</Button>} />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}`,
    description:
      "Slides up from the bottom edge of the screen. This is the default swipe direction.",
    id: "default",
    preview: (
      <Drawer>
        <DrawerTrigger
          render={<Button variant="outline">Open Drawer</Button>}
        />
        <DrawerContent>
          <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you're
                done.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Save changes</Button>
              <DrawerClose render={<Button variant="outline">Cancel</Button>} />
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    ),
    title: "Default",
  },
  {
    code: `import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerRightDemo() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline">Open Side Drawer</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>
            You have no new notifications.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline">Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
    description:
      "Set swipeDirection to slide the drawer in from a different edge.",
    id: "side",
    preview: (
      <Drawer swipeDirection="right">
        <DrawerTrigger
          render={<Button variant="outline">Open Side Drawer</Button>}
        />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>
              You have no new notifications.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose render={<Button variant="outline">Close</Button>} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    ),
    title: "Side",
  },
];
