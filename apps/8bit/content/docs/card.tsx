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
import type { DocVariant } from "@/content/docs/registry";

export const title = "Card";
export const description = "Displays a card with header, content, and footer.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/card",
};

export const variants: DocVariant[] = [
  {
    code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Deploy your new project in one click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Projects include a database, auth, and storage out of the box.
        </p>
      </CardContent>
    </Card>
  );
}`,
    description: "A basic card with a header, title, description, and body.",
    id: "default",
    preview: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Projects include a database, auth, and storage out of the box.
          </p>
        </CardContent>
      </Card>
    ),
    title: "Default",
  },
  {
    code: `import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithFooterDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team plan</CardTitle>
        <CardDescription>Billed monthly, cancel anytime.</CardDescription>
        <CardAction>
          <Button size="sm" variant="outline">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Up to 10 members with shared workspaces and priority support.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="w-full" variant="outline">
          Cancel
        </Button>
        <Button className="w-full">Upgrade</Button>
      </CardFooter>
    </Card>
  );
}`,
    description:
      "Add a CardAction next to the header and actions in the footer.",
    id: "with-footer",
    preview: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Team plan</CardTitle>
          <CardDescription>Billed monthly, cancel anytime.</CardDescription>
          <CardAction>
            <Button size="sm" variant="outline">
              Edit
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Up to 10 members with shared workspaces and priority support.
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button className="w-full" variant="outline">
            Cancel
          </Button>
          <Button className="w-full">Upgrade</Button>
        </CardFooter>
      </Card>
    ),
    title: "With Footer",
  },
];
