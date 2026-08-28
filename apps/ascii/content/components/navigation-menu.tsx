import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { ComponentDoc } from "./types";

const flyoutLinkClassName =
  "block w-full px-[2ch] normal-case text-ascii-soft hover:text-primary focus-visible:text-primary outline-none";

export const doc: ComponentDoc = {
  title: "Navigation Menu",
  description: "A collection of links for site navigation.",
  sections: [
    {
      title: "example",
      code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Product</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="#">Overview</NavigationMenuLink>
        <NavigationMenuLink href="#">Changelog</NavigationMenuLink>
        <NavigationMenuLink href="#">Roadmap</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="#">Getting started</NavigationMenuLink>
        <NavigationMenuLink href="#">API reference</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="#" active>Pricing</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
      preview: (
        <div className="flex min-h-40 items-start">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className={flyoutLinkClassName} href="#">
                    Overview
                  </NavigationMenuLink>
                  <NavigationMenuLink className={flyoutLinkClassName} href="#">
                    Changelog
                  </NavigationMenuLink>
                  <NavigationMenuLink className={flyoutLinkClassName} href="#">
                    Roadmap
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className={flyoutLinkClassName} href="#">
                    Getting started
                  </NavigationMenuLink>
                  <NavigationMenuLink className={flyoutLinkClassName} href="#">
                    API reference
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink active href="#">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ),
    },
  ],
};
