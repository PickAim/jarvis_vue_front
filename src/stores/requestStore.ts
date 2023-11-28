import {defineStore} from "pinia";
import {ref} from "vue";
import type {ResponseData} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";

export interface RequestOptionsInfo {
    requestLevel: number,
    isSequence: boolean,
    isAllOK: boolean
}

export interface RequestOptions extends RequestOptionsInfo {
    abortController: AbortController
}

export const useRequestStore = defineStore('requestStore', () => {
    const isLoading = ref(false);
    const isHidden = ref(false);
    const requestsCount = ref(0);
    const requestLevel = ref(0);
    const requestsOptions = ref<RequestOptions[]>([]);

    function createRequestOptions(requestOptionsInfo: RequestOptionsInfo) {
        const abortController = new AbortController();
        requestsOptions.value[requestOptionsInfo.requestLevel] = {
            abortController,
            ...requestOptionsInfo
        };
    }

    function updateRequestOptions(requestOptionsInfo: Partial<RequestOptionsInfo>) {
        const infoWithDefaults: RequestOptionsInfo = {
            requestLevel: requestOptionsInfo.requestLevel ?? requestLevel.value,
            isSequence: requestOptionsInfo.isSequence ?? false,
            isAllOK: requestOptionsInfo.isAllOK ?? true,
        }
        loadingAbort(infoWithDefaults.requestLevel);
        createRequestOptions(infoWithDefaults);
    }

    function setLevel(level: number) {
        requestLevel.value = level;
    }

    function getOptions(requestLevel: number): RequestOptions {
        return requestsOptions.value[requestLevel];
    }

    function loadingStart(): RequestOptions {
        requestsCount.value++;
        if (!getOptions(requestLevel.value) ||
            (getOptions(requestLevel.value) && !(getOptions(requestLevel.value).isSequence))) {
            updateRequestOptions({requestLevel: requestLevel.value});
        }
        isLoading.value = true;
        return getOptions(requestLevel.value);
    }

    function loadingStop<RT>(requestOptions: RequestOptions, response: ResponseData<RT>) {
        requestsCount.value--;
        if (requestOptions.isAllOK && (response.code != ResultCode.OK && response.code != ResultCode.CANCEL_ERROR)) {
            loadingAbort(requestOptions.requestLevel);
        }
        if (requestsCount.value <= 0) {
            isLoading.value = false;
        }
    }

    function loadingAbort(requestLevel: number) {
        requestsOptions.value.forEach((options, ind) => {
            if (ind >= requestLevel) {
                options.abortController.abort();
                delete requestsOptions.value[ind];
            }
        })
    }

    function hidePreloader() {
        isHidden.value = true;
    }

    function showPreloader() {
        isHidden.value = false;
    }

    async function executeInBackground(fn: () => Promise<void>, onLevel?: number) {
        hidePreloader();
        if (onLevel !== undefined) {
            setLevel(onLevel);
        }
        await fn();
        showPreloader();
    }

    function startSequence(onLevel?: number, allOK = true) {
        if (onLevel !== undefined) {
            setLevel(onLevel);
        }
        updateRequestOptions({
            isSequence: true,
            isAllOK: allOK
        });
    }

    function stopSequence() {
        getOptions(requestLevel.value).isSequence = false;
    }

    return {
        isHidden, isLoading, loadingStart, loadingStop, loadingAbort, hidePreloader, showPreloader,
        executeInBackground, startSequence, stopSequence, setLevel
    }
})