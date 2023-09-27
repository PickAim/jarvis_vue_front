import type {WidgetOptionsOverlayProperties} from "@/types/WidgetTypes";

export type OverlayName = "login" | "registration" | "widgetAdd" | "widgetSettings" | "widgetOptions" |
    "mobileMenu" | "settingsPanel";
export type OverlayOptions =
    { widgetOptions: WidgetOptionsOverlayProperties } &
    { [ind in Exclude<OverlayName, "widgetOptions">]: undefined };