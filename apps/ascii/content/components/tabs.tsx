import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Tabs",
  description: "Layered sections shown one at a time.",
  sections: [
    {
      title: "example",
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
      title: "states",
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
