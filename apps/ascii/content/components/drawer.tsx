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
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Drawer",
  description: "A panel that slides in from the edge of the screen.",
  sections: [
    {
      title: "example",
      code: `<Drawer>
  <DrawerTrigger render={<Button variant="outline">Open</Button>} />
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Quick actions</DrawerTitle>
      <DrawerDescription>
        Swipe down or press escape to dismiss.
      </DrawerDescription>
    </DrawerHeader>
    <div className="flex flex-col px-[2ch]">
      <span>&gt; restart session</span>
      <span>&gt; clear cache</span>
      <span>&gt; view build logs</span>
    </div>
    <DrawerFooter>
      <DrawerClose render={<Button variant="outline">Close</Button>} />
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
      preview: (
        <Drawer>
          <DrawerTrigger
            render={<Button variant="outline">Open command list</Button>}
          />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Quick actions</DrawerTitle>
              <DrawerDescription>
                Swipe down or press escape to dismiss.
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col px-[2ch] text-ascii-soft text-sm">
              <span>&gt; restart session</span>
              <span>&gt; clear cache</span>
              <span>&gt; view build logs</span>
            </div>
            <DrawerFooter>
              <DrawerClose render={<Button variant="outline">Close</Button>} />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
    },
  ],
};
