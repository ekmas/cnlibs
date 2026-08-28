export type AsciiComponentStatus = "ready" | "soon"

export type AsciiComponentEntry = {
  slug: string
  name: string
  description: string
  status: AsciiComponentStatus
}

export const asciiComponents: AsciiComponentEntry[] = [
  {
    slug: "accordion",
    name: "Accordion",
    description: "Stacked sections, one open at a time.",
    status: "ready",
  },
  {
    slug: "alert",
    name: "Alert",
    description: "A callout for user attention.",
    status: "ready",
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    description: "A modal that blocks the UI until the user responds.",
    status: "ready",
  },
  {
    slug: "aspect-ratio",
    name: "Aspect Ratio",
    description: "Constrains content to a fixed width/height ratio.",
    status: "ready",
  },
  {
    slug: "attachment",
    name: "Attachment",
    description: "A file bundled with an upload progress state.",
    status: "ready",
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "An image with a fallback for the user.",
    status: "ready",
  },
  {
    slug: "badge",
    name: "Badge",
    description: "A small status label.",
    status: "ready",
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "A trail to the current resource.",
    status: "ready",
  },
  {
    slug: "bubble",
    name: "Bubble",
    description: "A message bubble in a conversation.",
    status: "ready",
  },
  {
    slug: "button",
    name: "Button",
    description: "Triggers an action.",
    status: "ready",
  },
  {
    slug: "button-group",
    name: "Button Group",
    description: "Related buttons grouped together.",
    status: "ready",
  },
  {
    slug: "calendar",
    name: "Calendar",
    description: "Pick a date or a range of dates.",
    status: "ready",
  },
  {
    slug: "card",
    name: "Card",
    description: "Header, content and footer container.",
    status: "ready",
  },
  {
    slug: "carousel",
    name: "Carousel",
    description: "A horizontal, swipeable slide track.",
    status: "ready",
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "Toggle between checked and not checked.",
    status: "ready",
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    description: "Expands and collapses a panel.",
    status: "ready",
  },
  {
    slug: "combobox",
    name: "Combobox",
    description: "Autocomplete input with suggestions.",
    status: "ready",
  },
  {
    slug: "command",
    name: "Command",
    description: "Command palette for the mouse and keyboard.",
    status: "ready",
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    description: "A menu of actions triggered by a right click.",
    status: "ready",
  },
  {
    slug: "data-table",
    name: "Data Table",
    description: "A sortable table with client-side data.",
    status: "ready",
  },
  {
    slug: "date-picker",
    name: "Date Picker",
    description: "Date picker with range and preset support.",
    status: "ready",
  },
  {
    slug: "dialog",
    name: "Dialog",
    description: "A window overlaid on the primary content.",
    status: "ready",
  },
  {
    slug: "direction",
    name: "Direction",
    description: "Sets the text direction for your app.",
    status: "ready",
  },
  {
    slug: "drawer",
    name: "Drawer",
    description: "A panel that slides in from the edge of the screen.",
    status: "ready",
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    description: "A menu of options triggered by a button.",
    status: "ready",
  },
  {
    slug: "empty",
    name: "Empty",
    description: "An empty-state placeholder.",
    status: "ready",
  },
  {
    slug: "field",
    name: "Field",
    description: "A label + control + help text primitive.",
    status: "ready",
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    description: "Preview content behind a link.",
    status: "ready",
  },
  {
    slug: "input",
    name: "Input",
    description: "Text input for forms and user data entry.",
    status: "ready",
  },
  {
    slug: "input-group",
    name: "Input Group",
    description: "Icons, buttons and helper content on inputs.",
    status: "ready",
  },
  {
    slug: "input-otp",
    name: "Input OTP",
    description: "Accessible one-time password input.",
    status: "ready",
  },
  {
    slug: "item",
    name: "Item",
    description: "A composable row: title, description and actions.",
    status: "ready",
  },
  {
    slug: "kbd",
    name: "Kbd",
    description: "Displays keyboard shortcut input.",
    status: "ready",
  },
  {
    slug: "label",
    name: "Label",
    description: "An accessible label associated with a control.",
    status: "ready",
  },
  {
    slug: "marker",
    name: "Marker",
    description: "An active status dot, tone-coded by severity.",
    status: "ready",
  },
  {
    slug: "menubar",
    name: "Menubar",
    description: "A persistent menu common in desktop apps.",
    status: "ready",
  },
  {
    slug: "message",
    name: "Message",
    description: "A chat message with avatar, header and body.",
    status: "ready",
  },
  {
    slug: "message-scroller",
    name: "Message Scroller",
    description: "Auto-sticks to bottom, jumps to unread messages.",
    status: "ready",
  },
  {
    slug: "native-select",
    name: "Native Select",
    description: "A styled native select element.",
    status: "ready",
  },
  {
    slug: "navigation-menu",
    name: "Navigation Menu",
    description: "A collection of links for site navigation.",
    status: "ready",
  },
  {
    slug: "pagination",
    name: "Pagination",
    description: "Page navigation with first, last and ellipsis links.",
    status: "ready",
  },
  {
    slug: "popover",
    name: "Popover",
    description: "Rich content in a portal, triggered by a button.",
    status: "ready",
  },
  {
    slug: "progress",
    name: "Progress",
    description: "Shows completion progress of a task.",
    status: "ready",
  },
  {
    slug: "questionnaire",
    name: "Questionnaire",
    description: "Multi-step form with progress and conditional questions.",
    status: "ready",
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    description: "Only one option can be checked at a time.",
    status: "ready",
  },
  {
    slug: "resizable",
    name: "Resizable",
    description: "Accessible panel groups with keyboard support.",
    status: "ready",
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    description: "Custom, cross-browser scrollable region.",
    status: "ready",
  },
  {
    slug: "select",
    name: "Select",
    description: "Pick an option from a list.",
    status: "ready",
  },
  {
    slug: "separator",
    name: "Separator",
    description: "Visually or semantically separates content.",
    status: "ready",
  },
  {
    slug: "sheet",
    name: "Sheet",
    description: "Extends the dialog to display content on the edge.",
    status: "ready",
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    description: "A placeholder while content loads.",
    status: "ready",
  },
  {
    slug: "slider",
    name: "Slider",
    description: "Pick a value from within a given range.",
    status: "ready",
  },
  {
    slug: "spinner",
    name: "Spinner",
    description: "Indicates a loading state.",
    status: "ready",
  },
  {
    slug: "switch",
    name: "Switch",
    description: "Toggle between checked and not checked.",
    status: "ready",
  },
  {
    slug: "table",
    name: "Table",
    description: "A responsive table component.",
    status: "ready",
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "Layered sections shown one at a time.",
    status: "ready",
  },
  {
    slug: "textarea",
    name: "Textarea",
    description: "Multi-line text input.",
    status: "ready",
  },
  {
    slug: "toast",
    name: "Toast",
    description: "A succinct, temporary notification.",
    status: "ready",
  },
  {
    slug: "toggle",
    name: "Toggle",
    description: "A two-state button that can be on or off.",
    status: "ready",
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    description: "A set of two-state buttons, single or multi select.",
    status: "ready",
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "Info shown on hover or keyboard focus.",
    status: "ready",
  },
]

export function getComponentEntry(slug: string) {
  return asciiComponents.find((entry) => entry.slug === slug)
}
