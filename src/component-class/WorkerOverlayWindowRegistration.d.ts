import { WorkerOverlay } from "@/component-class/WorkerOverlay";
import type { RegData } from "@/packages/Objects";
export declare class WorkerOverlayWindowRegistration extends WorkerOverlay {
    constructor();
    registration(data: RegData): void;
}
