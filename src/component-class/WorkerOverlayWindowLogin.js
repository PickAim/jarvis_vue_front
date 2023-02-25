import { WorkerOverlay } from "@/component-class/WorkerOverlay";
export class WorkerOverlayWindowLogin extends WorkerOverlay {
    constructor() {
        super();
    }
    async login(data) {
        // TODO: add accountRequest, make 'data' necessary
        this.startLoading();
        await (() => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 2000);
            });
        })();
        this.stopLoading();
    }
}
