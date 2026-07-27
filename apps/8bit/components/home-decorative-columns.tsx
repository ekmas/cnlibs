"use client";

import {
  BellIcon,
  BoldIcon,
  CalendarIcon,
  CheckCircle2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FileTextIcon,
  InboxIcon,
  ItalicIcon,
  MoonIcon,
  SearchIcon,
  SmileIcon,
  StarIcon,
  UnderlineIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { CalendarDemo } from "@/components/docs/examples/calendar-demo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
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
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/components/ui/message";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
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
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
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
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const CHIP_CLASSNAME =
  "flex items-center gap-2 justify-center bg-card p-3 px-border-md px-rounded-md [--pixel-size:4px]";

/* A pool of real (but inert) UI snippets. DECORATIVE_COLUMN_KEYS below picks
 * each one by key into one of the decorative columns rendered next to the
 * hero content. Built (and rendered) entirely in this client-only module —
 * some of these, like Combobox's render-prop list, pass functions as
 * children, which can't cross a Server->Client boundary, so the whole tree
 * has to be constructed here rather than in the (Server Component) page and
 * passed down as props. */
interface FloatingTemplate {
  key: string;
  node: ReactNode;
}

const FLOATING_TEMPLATES: FloatingTemplate[] = [
  {
    key: "card",
    node: (
      <Card className="w-full text-left" size="sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarFallback className="text-[10px]">8b</AvatarFallback>
            </Avatar>
            <CardTitle className="text-xs">8bit/ui</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Pixel-cornered components
          </CardDescription>
        </CardHeader>
      </Card>
    ),
  },
  {
    key: "stat-card",
    node: (
      <Card className="w-full text-left" size="sm">
        <CardHeader>
          <CardDescription className="text-[10px]">
            Weekly active users
          </CardDescription>
          <CardTitle className="text-lg">12,480</CardTitle>
        </CardHeader>
      </Card>
    ),
  },
  {
    key: "table",
    node: (
      <Card className="w-full text-left" size="sm">
        <CardHeader>
          <CardTitle className="text-xs">Recent invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[10px]">Invoice</TableHead>
                <TableHead className="text-[10px]">Status</TableHead>
                <TableHead className="text-right text-[10px]">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-[10px]">INV001</TableCell>
                <TableCell className="text-[10px]">Paid</TableCell>
                <TableCell className="text-right text-[10px]">
                  $250.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-[10px]">INV002</TableCell>
                <TableCell className="text-[10px]">Pending</TableCell>
                <TableCell className="text-right text-[10px]">
                  $150.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    ),
  },
  {
    key: "empty",
    node: (
      <Empty className="w-full border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <InboxIcon />
          </EmptyMedia>
          <EmptyTitle className="text-xs">No messages</EmptyTitle>
          <EmptyDescription className="text-[10px]">
            Start a conversation to see it here.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    ),
  },
  {
    key: "item",
    node: (
      <ItemGroup className="w-full">
        <Item className="bg-card" variant="outline">
          <ItemMedia variant="icon">
            <BellIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-xs">New comment</ItemTitle>
            <ItemDescription className="text-[10px]">
              Someone replied to your post.
            </ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    ),
  },
  {
    key: "alert",
    node: (
      <Alert className="w-full text-left">
        <CheckCircle2Icon />
        <AlertTitle>Tip</AlertTitle>
        <AlertDescription>
          Copy the code or install from the registry.
        </AlertDescription>
      </Alert>
    ),
  },
  {
    key: "calendar",
    node: (
      <div className="w-full bg-card p-3 px-border-md px-rounded-md [--pixel-size:4px]">
        <CalendarDemo />
      </div>
    ),
  },
  {
    key: "form",
    node: (
      <Card className="w-full text-left" size="sm">
        <CardHeader>
          <CardTitle className="text-xs">Create account</CardTitle>
          <CardDescription className="text-xs">
            Start with your name and email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel className="text-xs" htmlFor="home-form-name">
                Name
              </FieldLabel>
              <Input id="home-form-name" placeholder="Evil Rabbit" />
            </Field>
            <Field>
              <FieldLabel className="text-xs" htmlFor="home-form-email">
                Email
              </FieldLabel>
              <Input
                id="home-form-email"
                placeholder="you@example.com"
                type="email"
              />
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>
    ),
  },
  {
    key: "tabs",
    node: (
      <Tabs className="w-full" defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent className="text-muted-foreground text-xs" value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent className="text-muted-foreground text-xs" value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
    ),
  },
  {
    key: "command",
    node: (
      <Command className="w-full">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon />
              Calendar
            </CommandItem>
            <CommandItem>
              <SmileIcon />
              Search Emoji
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
  {
    key: "combobox",
    node: (
      <Combobox items={["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]}>
        <ComboboxInput className="w-full" placeholder="Select a framework" />
        <ComboboxContent>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    ),
  },
  {
    key: "input-group",
    node: (
      <InputGroup className="w-full">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    ),
  },
  {
    key: "attachment",
    node: (
      <Attachment className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>invoice.pdf</AttachmentTitle>
          <AttachmentDescription>128 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    ),
  },
  {
    key: "message",
    node: (
      <Message className="w-full">
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Assistant</MessageHeader>
          <Bubble variant="secondary">
            <BubbleContent>
              Here's a summary of the pull request you asked for.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    ),
  },
  {
    key: "badge",
    node: (
      <div className={CHIP_CLASSNAME}>
        <BellIcon className="size-4 text-muted-foreground" />
        <Label className="text-xs">Updates</Label>
        <Badge>New</Badge>
      </div>
    ),
  },
  {
    key: "kbd",
    node: (
      <div className={CHIP_CLASSNAME}>
        <Label className="text-xs">Search</Label>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
    ),
  },
  {
    key: "toggle",
    node: (
      <div className={CHIP_CLASSNAME}>
        <Toggle aria-label="Toggle favorite" defaultPressed size="sm">
          <StarIcon />
        </Toggle>
        <Label className="text-xs">Starred</Label>
      </div>
    ),
  },
  {
    key: "toggle-group",
    node: (
      <div className={CHIP_CLASSNAME}>
        <Label className="text-xs">Format</Label>
        <ToggleGroup aria-label="Text formatting" defaultValue={["bold"]}>
          <ToggleGroupItem aria-label="Toggle bold" value="bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle italic" value="italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle underline" value="underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    ),
  },
  {
    key: "button-group",
    node: (
      <div className={CHIP_CLASSNAME}>
        <Label className="text-xs">Actions</Label>
        <ButtonGroup>
          <Button aria-label="Search" size="icon-sm" variant="outline">
            <SearchIcon />
          </Button>
          <Button aria-label="Calendar" size="icon-sm" variant="outline">
            <CalendarIcon />
          </Button>
          <Button aria-label="Notifications" size="icon-sm" variant="outline">
            <BellIcon />
          </Button>
        </ButtonGroup>
      </div>
    ),
  },
  {
    key: "select",
    node: (
      <Select defaultValue="dark">
        <SelectTrigger className="w-full" size="sm">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="light">Light</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    key: "switch",
    node: (
      <div className={CHIP_CLASSNAME}>
        <MoonIcon className="size-4 text-muted-foreground" />
        <Label className="text-xs">Dark mode</Label>
        <Switch defaultChecked size="sm" />
      </div>
    ),
  },
  {
    key: "checkbox",
    node: (
      <div className={CHIP_CLASSNAME}>
        <Checkbox defaultChecked />
        <Label className="text-xs">Accept terms</Label>
      </div>
    ),
  },
  {
    key: "progress",
    node: (
      <div className="flex w-full flex-col gap-1 bg-card p-3 px-border-md px-rounded-md [--pixel-size:4px]">
        <span className="text-[10px] text-muted-foreground">Deploying</span>
        <Progress value={72} />
      </div>
    ),
  },
  {
    key: "avatar-group",
    node: (
      <div className={CHIP_CLASSNAME}>
        <Label className="text-xs">Team</Label>
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarFallback>EK</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      </div>
    ),
  },
  {
    key: "input-otp",
    node: (
      <div className="flex w-full justify-center bg-card p-3 px-border-md px-rounded-md [--pixel-size:4px]">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    ),
  },
  {
    key: "textarea",
    node: (
      <div className="flex w-full flex-col gap-1.5 bg-card p-3 px-border-md px-rounded-md [--pixel-size:4px]">
        <Label className="text-xs">Bio</Label>
        <Textarea
          className="min-h-16 text-xs"
          placeholder="Tell us about yourself"
        />
      </div>
    ),
  },
  {
    key: "spinner",
    node: (
      <div className={cn(CHIP_CLASSNAME, "text-muted-foreground text-xs")}>
        <Spinner />
        Loading
      </div>
    ),
  },
  {
    key: "slider",
    node: (
      <div className="flex w-full items-center bg-card p-3 px-border-md px-rounded-md [--pixel-size:4px]">
        <Slider className="w-full" defaultValue={[40]} />
      </div>
    ),
  },
  {
    key: "radio-group",
    node: (
      <RadioGroup
        className="w-full gap-2 bg-card p-3 px-border-md px-rounded-md [--pixel-size:4px]"
        defaultValue="dark"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="light" />
          <Label className="text-xs">Light</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="dark" />
          <Label className="text-xs">Dark</Label>
        </div>
      </RadioGroup>
    ),
  },
  {
    key: "breadcrumb",
    node: (
      <div className="w-full bg-card p-3 px-border-md px-rounded-md [--pixel-size:4px]">
        <Breadcrumb>
          <BreadcrumbList className="text-xs">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Button</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    ),
  },
  {
    key: "pagination",
    node: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink aria-label="Previous" href="#" size="icon-sm">
              <ChevronLeftIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive size="icon-sm">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="icon-sm">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink aria-label="Next" href="#" size="icon-sm">
              <ChevronRightIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
  },
];

const FLOATING_TEMPLATE_BY_KEY = new Map(
  FLOATING_TEMPLATES.map((template) => [template.key, template])
);

function getFloatingTemplate(key: string): FloatingTemplate {
  const template = FLOATING_TEMPLATE_BY_KEY.get(key);
  if (!template) {
    throw new Error(`unreachable: missing floating template "${key}"`);
  }
  return template;
}

/* Decorative columns, left (nearest the hero) to right — plain flex flow,
 * no absolute positioning. Item counts step up (2, 3, 6, 8, 12) so the
 * stacks grow taller left-to-right, staircase/triangle style. Each column
 * renders flex-col-reverse + justify-start (not flex-col + justify-end)
 * on purpose: the last column's content is tall enough to overflow its
 * h-full box, and an end-justified overflowing flex container makes the
 * browser auto-scroll to reveal the *end* of the overflow, which — since
 * main is that scroll container and the absolutely-positioned hero shares
 * it — silently dragged the hero hundreds of pixels off-screen too.
 * Reversing the axis keeps "start" (now the bottom) as the anchor, so
 * overflow clips harmlessly off the top instead. */
const DECORATIVE_COLUMN_KEYS: string[][] = [
  ["stat-card", "badge"],
  ["breadcrumb", "switch", "checkbox"],
  [
    "select",
    "avatar-group",
    "spinner",
    "progress",
    "input-group",
    "attachment",
  ],
  [
    "input-otp",
    "slider",
    "radio-group",
    "toggle",
    "pagination",
    "button-group",
    "combobox",
    "message",
  ],
  [
    "toggle-group",
    "textarea",
    "card",
    "table",
    "empty",
    "item",
    "alert",
    "calendar",
    "form",
    "tabs",
    "command",
    "kbd",
  ],
];

const DECORATIVE_COLUMNS = DECORATIVE_COLUMN_KEYS.map((keys) =>
  keys.map((key) => getFloatingTemplate(key))
);

const FOCUSABLE_SELECTOR =
  "a, button, input, select, textarea, [tabindex], [contenteditable]";

/** Purely decorative — real components, but inert to keyboard/AT/search
 * engines. Mouse hover/click stays enabled (no pointer-events-none) so the
 * background still feels alive; a one-time DOM sweep instead strips every
 * descendant (including ones from opaque third-party primitives like the
 * calendar demo) out of the tab order and drops any real `href`, so keyboard
 * users never land here and there's no crawlable link. Loaded with
 * `ssr: false` (see home-decorative-columns-loader.tsx) so none of this text
 * or markup is even present in the server-rendered HTML search engines see. */
export function HomeDecorativeColumns() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }
    for (const el of root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)) {
      el.setAttribute("tabindex", "-1");
      if (el instanceof HTMLAnchorElement) {
        el.removeAttribute("href");
      }
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hidden h-full select-none gap-6 lg:flex"
      ref={rootRef}
    >
      {DECORATIVE_COLUMNS.map((column, columnIndex) => (
        <div
          className="flex h-full min-h-0 min-w-0 flex-1 flex-col-reverse justify-start gap-6"
          key={DECORATIVE_COLUMN_KEYS[columnIndex]?.join("-")}
        >
          {column.map((template) => (
            <div className="min-w-0" key={template.key}>
              {template.node}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
