import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Navigation Menu";
export const description = "A collection of links for navigating websites.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/navigation-menu",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1">
              <li>
                <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Installation</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Theming</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`,
    description:
      "Wrap dropdown links in a trigger and content, or use a plain link for a single item.",
    id: "default",
    preview: (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1">
                <li>
                  <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Installation</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Theming</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
    title: "Default",
  },
];
