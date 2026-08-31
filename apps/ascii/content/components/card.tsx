import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Card",
  description: "Header, content and footer container.",
  sections: [
    {
      title: "default",
      code: `<Card width={38}>
  <CardHeader>
    <CardTitle>Session</CardTitle>
    <CardDescription>Active on this device</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex justify-between">
      <span>device</span>
      <span>macbook-pro</span>
    </div>
    <div className="flex justify-between">
      <span>expires</span>
      <span>in 6 days</span>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="destructive">Revoke</Button>
  </CardFooter>
</Card>`,
      preview: (
        <Card width={38}>
          <CardHeader>
            <CardTitle>Session</CardTitle>
            <CardDescription>Active on this device</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-ascii-soft">
              <span>device</span>
              <span className="text-foreground">macbook-pro</span>
            </div>
            <div className="flex justify-between text-ascii-soft">
              <span>expires</span>
              <span className="text-foreground">in 6 days</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive">Revoke</Button>
          </CardFooter>
        </Card>
      ),
    },
    {
      title: "header only",
      code: `<Card width={30}>
  <CardHeader>
    <CardTitle>Header only</CardTitle>
    <CardDescription>No divider needed</CardDescription>
  </CardHeader>
</Card>`,
      preview: (
        <Card width={30}>
          <CardHeader>
            <CardTitle>Header only</CardTitle>
            <CardDescription>No divider needed</CardDescription>
          </CardHeader>
        </Card>
      ),
    },
    {
      title: "with action",
      description: "CardAction floats a control on the header's right edge.",
      code: `<Card width={30}>
  <CardHeader>
    <CardTitle>With action</CardTitle>
    <CardAction>
      <Button variant="ghost">Edit</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <span>Sections divide themselves.</span>
  </CardContent>
</Card>`,
      preview: (
        <Card width={30}>
          <CardHeader>
            <CardTitle>With action</CardTitle>
            <CardAction>
              <Button variant="ghost">Edit</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <span className="text-ascii-soft">Sections divide themselves.</span>
          </CardContent>
        </Card>
      ),
    },
  ],
};
