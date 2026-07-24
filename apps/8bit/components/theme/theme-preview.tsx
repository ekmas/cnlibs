"use client";

import { CheckCircle2Icon, PlusIcon, TerminalIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <div
      className={cn("mb-8 flex break-inside-avoid flex-col gap-3", className)}
    >
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

      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
        <PreviewSection title="Project">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>8b</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">8bit/ui</p>
              <p className="text-muted-foreground">Pixel-cornered components</p>
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

        <PreviewSection title="Tabs">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent
              className="text-muted-foreground text-sm"
              value="account"
            >
              Make changes to your account here.
            </TabsContent>
            <TabsContent
              className="text-muted-foreground text-sm"
              value="password"
            >
              Change your password here.
            </TabsContent>
            <TabsContent className="text-muted-foreground text-sm" value="team">
              Invite and manage your teammates.
            </TabsContent>
          </Tabs>
        </PreviewSection>

        <PreviewSection title="Team & progress">
          <AvatarGroup>
            <Avatar>
              <AvatarFallback>EK</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
          <div className="flex flex-col gap-2">
            <Label>Deploying</Label>
            <Progress value={72} />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </PreviewSection>

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
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-2">
              <RadioGroupItem id="theme-preview-r1" value="default" />
              <Label htmlFor="theme-preview-r1">Default</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="theme-preview-r2" value="comfortable" />
              <Label htmlFor="theme-preview-r2">Comfortable</Label>
            </div>
          </RadioGroup>
          <div className="flex items-center justify-between">
            <Label htmlFor="theme-preview-airplane">Airplane mode</Label>
            <Switch id="theme-preview-airplane" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Volume</Label>
            <Slider defaultValue={[60]} />
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
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </PreviewSection>

        <PreviewSection title="FAQ">
          <Accordion defaultValue={["item-1"]}>
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
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
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
              <ToggleGroupItem aria-label="Toggle underline" value="underline">
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
      </div>
    </div>
  );
}
