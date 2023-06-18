import type {WidgetOptionsOverlayProperties} from "@/types/WidgetTypes";

export type OverlayName = "login" | "registration" | "controlPanel" | "widgetAdd" | "widgetSettings" | "widgetOptions";
export type OverlayOptions =
    { widgetOptions: WidgetOptionsOverlayProperties } &
    { [ind in Exclude<OverlayName, "widgetOptions">]: undefined };