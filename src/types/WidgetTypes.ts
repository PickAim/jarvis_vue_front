export type Widget<O extends WidgetName = WidgetName> = {
    gridIndex: number,
    targetIndex: number,
    widgetName: WidgetName,
    settings?: WidgetOptions[O]
}
export type UnitCalcNicheWidgetOptions = {
    nicheName: string
}
export type UnitCalcResultWidgetOptions = {
    saveResultID: string
}
export type RemainsWidgetOptions = undefined;
export type StoreProfitabilityWidgetOptions = undefined;
export type OrdersAndRedemptionsWidgetOptions = {
    period: number,
    isOrders: boolean,
    isRedemptions: boolean,
    isAverage: boolean,
    averagePeriod: number
}
export type AverageCheckWidgetOptions = undefined;
export type LostRevenueWidgetOptions = undefined;
export type TurnoverWidgetOptions = undefined;

export interface WidgetOptions {
    unitEcon: UnitCalcResultWidgetOptions,
    nicheDist: UnitCalcNicheWidgetOptions,
    remains: RemainsWidgetOptions,
    storeProfitability: StoreProfitabilityWidgetOptions,
    ordersAndRedemptions: OrdersAndRedemptionsWidgetOptions,
    averageCheck: AverageCheckWidgetOptions,
    lostRevenue: LostRevenueWidgetOptions,
    turnover: TurnoverWidgetOptions
}

export type WidgetName = keyof WidgetOptions;
export type WidgetSettingsOverlayOptions = {
    index: number
}