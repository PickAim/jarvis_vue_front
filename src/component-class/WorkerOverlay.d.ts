export declare class WorkerOverlay {
    overlayState: import("pinia").Store<"overlayState", {
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
    constructor();
    closeOverlay(): void;
    changeOverlay(name: string): void;
    startLoading(): void;
    stopLoading(): void;
}
