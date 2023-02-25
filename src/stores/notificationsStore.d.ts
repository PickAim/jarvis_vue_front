export interface NotificationInput {
    header: string;
    body: string;
    type: "error" | "notify" | "warning";
    duration?: number;
}
export interface Notification extends NotificationInput {
    id: number;
    isShow: boolean;
}
export declare const useNotificationsStore: import("pinia").StoreDefinition<"notifications", {
    notificationsList: Notification[];
    timerList: {
        [id: number]: number;
    };
    defaultDuration: number;
    id: number;
}, {
    notifications: (state: {
        notificationsList: {
            id: number;
            isShow: boolean;
            header: string;
            body: string;
            type: "error" | "notify" | "warning";
            duration?: number | undefined;
        }[];
        timerList: {
            [id: number]: number;
        };
        defaultDuration: number;
        id: number;
    } & import("pinia").PiniaCustomStateProperties<{
        notificationsList: Notification[];
        timerList: {
            [id: number]: number;
        };
        defaultDuration: number;
        id: number;
    }>) => Notification[];
}, {
    addNotification(note: NotificationInput): void;
    getNotification(id: number): {
        id: number;
        isShow: boolean;
        header: string;
        body: string;
        type: "error" | "notify" | "warning";
        duration?: number | undefined;
    } | undefined;
    showNotification(id: number): void;
    hideNotification(id: number): void;
    hideNotificationByInst(note: Notification): void;
    hideAllNotifications(): void;
    startNotificationTimer(id: number): void;
    stopNotificationTimer(id: number): void;
}>;
