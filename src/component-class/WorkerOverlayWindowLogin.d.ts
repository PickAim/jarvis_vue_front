import { WorkerOverlay } from "@/component-class/WorkerOverlay";
import type { LoginData } from "@/packages/Objects";
export declare class WorkerOverlayWindowLogin extends WorkerOverlay {
    constructor();
    login(data?: LoginData): Promise<void>;
}
