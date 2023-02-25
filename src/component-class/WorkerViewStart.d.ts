export declare class WorkerViewStart {
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
    openLoginOverlay(): void;
    openRegistrationOverlay(): void;
}
