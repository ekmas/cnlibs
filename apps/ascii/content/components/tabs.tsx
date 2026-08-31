import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Tabs",
  description: "Layered sections shown one at a time.",
  sections: [
    {
      title: "default",
      code: `<Tabs defaultValue="overview" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">3 deployments today.</TabsContent>
  <TabsContent value="settings">
    Environment variables and build settings live here.
  </TabsContent>
  <TabsContent value="billing">You're on the free plan.</TabsContent>
</Tabs>`,
      preview: (
        <Tabs className="w-full max-w-md" defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">3 deployments today.</TabsContent>
          <TabsContent value="settings">
            Environment variables and build settings live here.
          </TabsContent>
          <TabsContent value="billing">
            You&apos;re on the free plan.
          </TabsContent>
        </Tabs>
      ),
    },
    {
      title: "boxed",
      description:
        "Framed tabs sitting on a framed panel — the look of the docs' install tabs.",
      code: `<Tabs variant="boxed" defaultValue="pnpm" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="pnpm">pnpm</TabsTrigger>
    <TabsTrigger value="npm">npm</TabsTrigger>
    <TabsTrigger value="yarn">yarn</TabsTrigger>
    <TabsTrigger value="bun">bun</TabsTrigger>
  </TabsList>
  <TabsContent value="pnpm">pnpm dlx shadcn@latest add tabs</TabsContent>
  <TabsContent value="npm">npx shadcn@latest add tabs</TabsContent>
  <TabsContent value="yarn">yarn dlx shadcn@latest add tabs</TabsContent>
  <TabsContent value="bun">bunx --bun shadcn@latest add tabs</TabsContent>
</Tabs>`,
      preview: (
        <Tabs className="w-full max-w-md" defaultValue="pnpm" variant="boxed">
          <TabsList>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
          </TabsList>
          <TabsContent value="pnpm">
            pnpm dlx shadcn@latest add tabs
          </TabsContent>
          <TabsContent value="npm">npx shadcn@latest add tabs</TabsContent>
          <TabsContent value="yarn">
            yarn dlx shadcn@latest add tabs
          </TabsContent>
          <TabsContent value="bun">
            bunx --bun shadcn@latest add tabs
          </TabsContent>
        </Tabs>
      ),
    },
    {
      title: "disabled tab",
      code: `<Tabs defaultValue="a" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="a">Active</TabsTrigger>
    <TabsTrigger value="b" disabled>Disabled</TabsTrigger>
  </TabsList>
  <TabsContent value="a">Disabled tabs are skipped by keyboard focus.</TabsContent>
</Tabs>`,
      preview: (
        <Tabs className="w-full max-w-md" defaultValue="a">
          <TabsList>
            <TabsTrigger value="a">Active</TabsTrigger>
            <TabsTrigger disabled value="b">
              Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            Disabled tabs are skipped by keyboard focus.
          </TabsContent>
        </Tabs>
      ),
    },
  ],
};
