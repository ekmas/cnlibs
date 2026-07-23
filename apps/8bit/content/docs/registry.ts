import type { ReactNode } from "react";

export interface DocVariant {
  /** Source shown in the Code tab and in the copied markdown. */
  code?: string;
  description?: string;
  /** Anchor id for the variant section, e.g. "default" or "outline". */
  id: string;
  /** Rendered in the Preview tab. */
  preview?: ReactNode;
  title: string;
}

export interface DocLinks {
  shadcn?: string;
}

export interface DocModule {
  description: string;
  links?: DocLinks;
  title: string;
  variants: DocVariant[];
}

export const docs: Record<string, () => Promise<DocModule>> = {
  accordion: () => import("./accordion"),
  alert: () => import("./alert"),
  "alert-dialog": () => import("./alert-dialog"),
  attachment: () => import("./attachment"),
  avatar: () => import("./avatar"),
  badge: () => import("./badge"),
  breadcrumb: () => import("./breadcrumb"),
  bubble: () => import("./bubble"),
  button: () => import("./button"),
  "button-group": () => import("./button-group"),
  calendar: () => import("./calendar"),
  card: () => import("./card"),
  carousel: () => import("./carousel"),
  chart: () => import("./chart"),
  checkbox: () => import("./checkbox"),
  collapsible: () => import("./collapsible"),
  combobox: () => import("./combobox"),
  command: () => import("./command"),
  "context-menu": () => import("./context-menu"),
  "data-table": () => import("./data-table"),
  "date-picker": () => import("./date-picker"),
  dialog: () => import("./dialog"),
  drawer: () => import("./drawer"),
  "dropdown-menu": () => import("./dropdown-menu"),
  empty: () => import("./empty"),
  field: () => import("./field"),
  "hover-card": () => import("./hover-card"),
  input: () => import("./input"),
  "input-group": () => import("./input-group"),
  "input-otp": () => import("./input-otp"),
  item: () => import("./item"),
  kbd: () => import("./kbd"),
  label: () => import("./label"),
  marker: () => import("./marker"),
  menubar: () => import("./menubar"),
  message: () => import("./message"),
  "message-scroller": () => import("./message-scroller"),
  "native-select": () => import("./native-select"),
  "navigation-menu": () => import("./navigation-menu"),
  pagination: () => import("./pagination"),
  popover: () => import("./popover"),
  progress: () => import("./progress"),
  "radio-group": () => import("./radio-group"),
  resizable: () => import("./resizable"),
  "scroll-area": () => import("./scroll-area"),
  select: () => import("./select"),
  separator: () => import("./separator"),
  sheet: () => import("./sheet"),
  sidebar: () => import("./sidebar"),
  skeleton: () => import("./skeleton"),
  slider: () => import("./slider"),
  sonner: () => import("./sonner"),
  spinner: () => import("./spinner"),
  switch: () => import("./switch"),
  table: () => import("./table"),
  tabs: () => import("./tabs"),
  textarea: () => import("./textarea"),
  toggle: () => import("./toggle"),
  "toggle-group": () => import("./toggle-group"),
  tooltip: () => import("./tooltip"),
};
