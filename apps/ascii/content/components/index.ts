import { doc as accordion } from "./accordion";
import { doc as alert } from "./alert";
import { doc as alertDialog } from "./alert-dialog";
import { doc as aspectRatio } from "./aspect-ratio";
import { doc as attachment } from "./attachment";
import { doc as avatar } from "./avatar";
import { doc as badge } from "./badge";
import { doc as breadcrumb } from "./breadcrumb";
import { doc as bubble } from "./bubble";
import { doc as button } from "./button";
import { doc as buttonGroup } from "./button-group";
import { doc as calendar } from "./calendar";
import { doc as card } from "./card";
import { doc as carousel } from "./carousel";
import { doc as checkbox } from "./checkbox";
import { doc as collapsible } from "./collapsible";
import { doc as combobox } from "./combobox";
import { doc as command } from "./command";
import { doc as contextMenu } from "./context-menu";
import { doc as dataTable } from "./data-table";
import { doc as datePicker } from "./date-picker";
import { doc as dialog } from "./dialog";
import { doc as direction } from "./direction";
import { doc as drawer } from "./drawer";
import { doc as dropdownMenu } from "./dropdown-menu";
import { doc as empty } from "./empty";
import { doc as field } from "./field";
import { doc as hoverCard } from "./hover-card";
import { doc as input } from "./input";
import { doc as inputGroup } from "./input-group";
import { doc as inputOtp } from "./input-otp";
import { doc as item } from "./item";
import { doc as kbd } from "./kbd";
import { doc as label } from "./label";
import { doc as marker } from "./marker";
import { doc as menubar } from "./menubar";
import { doc as message } from "./message";
import { doc as messageScroller } from "./message-scroller";
import { doc as nativeSelect } from "./native-select";
import { doc as navigationMenu } from "./navigation-menu";
import { doc as pagination } from "./pagination";
import { doc as popover } from "./popover";
import { doc as progress } from "./progress";
import { doc as questionnaire } from "./questionnaire";
import { doc as radioGroup } from "./radio-group";
import { doc as resizable } from "./resizable";
import { doc as scrollArea } from "./scroll-area";
import { doc as select } from "./select";
import { doc as separator } from "./separator";
import { doc as sheet } from "./sheet";
import { doc as skeleton } from "./skeleton";
import { doc as slider } from "./slider";
import { doc as spinner } from "./spinner";
import { doc as switchDoc } from "./switch";
import { doc as table } from "./table";
import { doc as tabs } from "./tabs";
import { doc as textarea } from "./textarea";
import { doc as toast } from "./toast";
import { doc as toggle } from "./toggle";
import { doc as toggleGroup } from "./toggle-group";
import { doc as tooltip } from "./tooltip";
import type { ComponentDoc } from "./types";

/** Every documented component, keyed by its /components/[slug] route.
 * Adding a component's docs = one module here + one registry entry
 * (plus its lib/ascii-components.ts entry for the sidebar/index). */
export const componentDocs: Record<string, ComponentDoc> = {
  accordion,
  alert,
  "alert-dialog": alertDialog,
  "aspect-ratio": aspectRatio,
  attachment,
  avatar,
  badge,
  breadcrumb,
  bubble,
  button,
  "button-group": buttonGroup,
  calendar,
  card,
  carousel,
  checkbox,
  collapsible,
  combobox,
  command,
  "context-menu": contextMenu,
  "data-table": dataTable,
  "date-picker": datePicker,
  dialog,
  direction,
  drawer,
  "dropdown-menu": dropdownMenu,
  empty,
  field,
  "hover-card": hoverCard,
  input,
  "input-group": inputGroup,
  "input-otp": inputOtp,
  item,
  kbd,
  label,
  marker,
  menubar,
  message,
  "message-scroller": messageScroller,
  "native-select": nativeSelect,
  "navigation-menu": navigationMenu,
  pagination,
  popover,
  progress,
  questionnaire,
  "radio-group": radioGroup,
  resizable,
  "scroll-area": scrollArea,
  select,
  separator,
  sheet,
  skeleton,
  slider,
  spinner,
  switch: switchDoc,
  table,
  tabs,
  textarea,
  toast,
  toggle,
  "toggle-group": toggleGroup,
  tooltip,
};
