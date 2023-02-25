export declare const useOverlayStateStore: import("pinia").StoreDefinition<"overlayState", {
    overlayName: string;
    isOpen: boolean;
    isLoading: boolean;
    effect: string;
    effectOptions: {};
}, {}, {
    setOverlayName(name: string): void;
    openOverlay(): void;
    closeOverlay(): void;
    startLoading(): void;
    stopLoading(): void;
}>;
