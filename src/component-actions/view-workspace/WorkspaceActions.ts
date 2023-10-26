import {AccountRequestActions} from "@/requests/request-actions/AccountRequestActions";
import {ResultCode} from "@/requests/ResultCode";

export class WorkspaceActions {
    isPageLoading = false;

    async initSection() {
        this.isPageLoading = true;
        // Just delay for visualization
        await (new Promise(resolve => setTimeout(resolve, 500)));
        const response = await (new AccountRequestActions()).loginToken();
        this.isPageLoading = response.code !== ResultCode.OK;
    }
}