import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Tabs";
export const description =
  "A set of layered sections of content displayed one at a time.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/tabs",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs className="w-full max-w-md" defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
      <TabsContent value="team">
        Invite and manage your teammates.
      </TabsContent>
    </Tabs>
  );
}`,
    description: "Set defaultValue to the tab that should be active initially.",
    id: "default",
    preview: (
      <Tabs className="w-full max-w-md" defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="team">
          Invite and manage your teammates.
        </TabsContent>
      </Tabs>
    ),
    title: "Default",
  },
];
