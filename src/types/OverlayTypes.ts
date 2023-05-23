import type {WidgetName, WidgetSettingsOverlayOptions} from "@/types/WidgetTypes";

export type OverlayName = "login" | "registration" | "controlPanel" | "widgetAdd" | "widgetSettings" | WidgetName;
export type OverlayOptions =
    { [ind in WidgetName]: WidgetSettingsOverlayOptions } &
    { [ind in Exclude<OverlayName, WidgetName>]: undefined };