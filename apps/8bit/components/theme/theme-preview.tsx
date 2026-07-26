"use client";

import {
  BellIcon,
  CheckCircle2Icon,
  PackageIcon,
  PlusIcon,
  TerminalIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Bar } from "@/components/dither-kit/bar";
import { BarChart } from "@/components/dither-kit/bar-chart";
import type { ChartConfig } from "@/components/dither-kit/chart-context";
import { Grid } from "@/components/dither-kit/grid";
import { Legend } from "@/components/dither-kit/legend";
import { Tooltip as ChartTooltip } from "@/components/dither-kit/tooltip";
import { XAxis } from "@/components/dither-kit/x-axis";
import { YAxis } from "@/components/dither-kit/y-axis";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Kbd } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const INVOICES = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  {
    id: "INV003",
    status: "Unpaid",
    method: "Bank Transfer",
    amount: "$350.00",
  },
];

const signupsData = [
  { week: "W1", free: 120, pro: 40 },
  { week: "W2", free: 160, pro: 55 },
  { week: "W3", free: 140, pro: 70 },
  { week: "W4", free: 190, pro: 90 },
];
const signupsConfig = {
  free: { label: "Free", color: "blue" },
  pro: { label: "Pro", color: "purple" },
} satisfies ChartConfig;

function PreviewSection({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h3 className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function ThemePreview() {
  return (
    <div className="flex w-full flex-col gap-8 bg-background p-6 px-border-md px-rounded-md text-foreground [--pixel-size:6px] sm:p-10">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Primary</Button>
        <Button size="sm" variant="secondary">
          Secondary
        </Button>
        <Button size="sm" variant="outline">
          Outline
        </Button>
        <Button size="sm" variant="ghost">
          Ghost
        </Button>
        <Button size="sm" variant="destructive">
          Destructive
        </Button>
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <PreviewSection title="Project">
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center bg-primary px-rounded-md text-primary-foreground [--pixel-size:2px]">
                <PackageIcon className="size-4" />
              </div>
              <div className="text-sm">
                <p className="font-medium">8bit/ui</p>
                <p className="text-muted-foreground">
                  Pixel-cornered components
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="theme-preview-name">Project name</Label>
              <Input id="theme-preview-name" placeholder="my-project" />
            </div>
            <div className="flex gap-2">
              <Button className="flex-1" variant="outline">
                Cancel
              </Button>
              <Button className="flex-1">Deploy</Button>
            </div>
          </PreviewSection>

          <PreviewSection title="Alerts">
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle>Changes saved</AlertTitle>
              <AlertDescription>
                Your theme preview updates instantly.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <TerminalIcon />
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>
                This is what a destructive alert looks like.
              </AlertDescription>
            </Alert>
          </PreviewSection>

          <PreviewSection title="Sheet">
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Edit profile
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose render={<Button variant="outline" />}>
                    Cancel
                  </SheetClose>
                  <Button>Save changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </PreviewSection>
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <PreviewSection title="Form elements">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="theme-preview-bio">Bio</Label>
              <Textarea
                id="theme-preview-bio"
                placeholder="Tell us about yourself"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Framework</Label>
              <Select defaultValue="next">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="remix">Remix</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked id="theme-preview-terms" />
              <Label htmlFor="theme-preview-terms">
                Accept terms and conditions
              </Label>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="theme-preview-airplane">Airplane mode</Label>
              <Switch id="theme-preview-airplane" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Volume</Label>
              <Slider defaultValue={[60]} />
            </div>
          </PreviewSection>

          <PreviewSection title="Team & progress">
            <div className="flex items-center gap-2">
              {["EK", "SB", "JD"].map((initials) => (
                <Badge key={initials} variant="outline">
                  {initials}
                </Badge>
              ))}
              <span className="text-muted-foreground text-xs">+3 more</span>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Deploying</Label>
              <Progress value={72} />
            </div>
          </PreviewSection>

          <PreviewSection title="Notifications">
            <ItemGroup className="w-full">
              <Item variant="outline">
                <ItemMedia variant="icon">
                  <BellIcon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>New comment</ItemTitle>
                  <ItemDescription>
                    Someone replied to your post.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </PreviewSection>
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <PreviewSection title="Chart">
            <div className="h-48 w-full">
              <BarChart config={signupsConfig} data={signupsData}>
                <Grid />
                <XAxis dataKey="week" />
                <YAxis />
                <ChartTooltip />
                <Legend />
                <Bar dataKey="free" />
                <Bar dataKey="pro" />
              </BarChart>
            </div>
          </PreviewSection>

          <PreviewSection title="Invoices">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {INVOICES.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell className="text-right">
                      {invoice.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </PreviewSection>

          <PreviewSection title="Navigation">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Theme</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </PreviewSection>
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <PreviewSection title="Card">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Invite teammates</CardTitle>
                <CardDescription>
                  Send an invite link to collaborate on this project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="theme-preview-invite-email">
                    Email address
                  </Label>
                  <Input
                    id="theme-preview-invite-email"
                    placeholder="teammate@example.com"
                    type="email"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Send invite</Button>
              </CardFooter>
            </Card>
          </PreviewSection>

          <PreviewSection title="Toolbar">
            <div className="flex flex-wrap items-center gap-4">
              <ToggleGroup aria-label="Text formatting" defaultValue={["bold"]}>
                <ToggleGroupItem aria-label="Toggle bold" value="bold">
                  B
                </ToggleGroupItem>
                <ToggleGroupItem aria-label="Toggle italic" value="italic">
                  I
                </ToggleGroupItem>
                <ToggleGroupItem
                  aria-label="Toggle underline"
                  value="underline"
                >
                  U
                </ToggleGroupItem>
              </ToggleGroup>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button size="icon-sm" variant="outline">
                      <PlusIcon />
                    </Button>
                  }
                />
                <TooltipContent>Add new item</TooltipContent>
              </Tooltip>
              <Kbd>⌘K</Kbd>
            </div>
          </PreviewSection>

          <PreviewSection title="FAQ">
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it themeable?</AccordionTrigger>
                <AccordionContent>
                  Yes. Every color here comes from the selected theme preset.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. Panels animate open and closed by default.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </PreviewSection>
        </div>
      </div>
    </div>
  );
}
