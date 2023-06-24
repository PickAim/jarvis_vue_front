import type {ResponseData} from "@/types/Objects";
import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import type {ISavableCalcActions, ISavableCalcStore} from "@/requests/request-actions/interfaces/ISavableCalc";
import {ResultCode} from "@/types/ResultCode";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {ResultDescription} from "@/types/ResultDescription";

export abstract class AbstractWorkspaceSavableCalcActions<Q, R> {
    abstract actions: ISavableCalcActions<Q, R>;

    notificationsStore;

    protected constructor() {
        this.notificationsStore = useNotificationsStore();
    }

    // TODO: add notifications
    async calculate(calcRequest: Q): Promise<ResponseData<R>> {
        const transformedRequest = this.convertRequestToNumber(calcRequest);
        if (transformedRequest === undefined) {
            this.notificationsStore.addErrorNotification(ResultDescription[ResultCode.INCORRECT_INPUT]);
            return {code: ResultCode.INCORRECT_INPUT}
        }
        const response = await this.actions.calculate(transformedRequest);
        if (response.code !== ResultCode.OK) {
            this.notificationsStore.addErrorNotification(ResultDescription[response.code]);
        }
        return response;
    }

    async deleteRequest(id: CalcRequestInfoData["id"]): Promise<ResponseData<void>> {
        const response = await this.actions.deleteRequest(id);
        if (response.code !== ResultCode.OK) {
            this.notificationsStore.addErrorNotification(ResultDescription[response.code]);
        }
        return response;
    }

    async saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>>> {
        const transformedRequest = this.convertRequestToNumber(calcRequest.request);
        if (transformedRequest === undefined) {
            this.notificationsStore.addErrorNotification(ResultDescription[ResultCode.INCORRECT_INPUT]);
            return {code: ResultCode.INCORRECT_INPUT}
        }
        const transformedRequestData = {
            request: transformedRequest,
            result: calcRequest.result,
            info: calcRequest.info
        };
        const response = await this.actions.saveRequest(transformedRequestData);
        if (response.code !== ResultCode.OK) {
            this.notificationsStore.addErrorNotification(ResultDescription[response.code]);
        }
        return response;
    }

    async loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>> {
        const response = await this.actions.loadAll();
        if (response.code !== ResultCode.OK) {
            this.notificationsStore.addErrorNotification(ResultDescription[response.code]);
        }
        return response;
    }

    getAll(): CalcRequestData<Q, R>[] {
        const requests = this.actions.getAll();
        return requests;
    }

    getCalcRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined {
        return this.actions.getCalcRequest(id);
    }

    getStore(): ISavableCalcStore<Q, R> {
        return this.actions.getStore();
    }

    private convertRequestToNumber(request: Q): Q | undefined {
        const transformedRequest: Q = this.createEmptyRequestObject();

        let key: keyof Q;
        for (key in transformedRequest) {
            if (request[key] === undefined) {
                transformedRequest[key] = request[key];
                continue;
            }
            if (typeof (transformedRequest[key]) == "string")
                transformedRequest[key] = request[key];
            if (typeof (transformedRequest[key]) == "number") {
                const num = parseFloat(request[key] as string ?? "");
                if (isNaN(num))
                    return;
                transformedRequest[key] = num as Q[keyof Q];
            }
        }
        return transformedRequest;
    }

    abstract createEmptyRequestObject(): Q;
}