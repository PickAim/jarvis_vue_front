import {AccountRequestActions} from "@/requests/request-actions/AccountRequestActions";
import {ResultCode} from "@/requests/ResultCode";

export class WorkspaceActions {
    isPageLoading = false;

    async initSection() {
        this.isPageLoading = true;
        const response = await (new AccountRequestActions()).loginToken();
        console.log(response);
        this.isPageLoading = response.code !== ResultCode.OK;
    }
}