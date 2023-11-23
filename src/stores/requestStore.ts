import {defineStore} from "pinia";
import {ref} from "vue";

export const useRequestStore = defineStore('requestStore', () => {
    const isLoading = ref(false);
    const isHidden = ref(false);
    const isSequence = ref(false);
    const requestsCount = ref(0);
    const requestLevel = ref(0);
    const requestAbortControllers = ref<AbortController[]>([]);

    function updateAbortController(requestLevel: number) {
        loadingAbort(requestLevel);
        requestAbortControllers.value[requestLevel] = new AbortController();
    }

    function setLevel(level: number) {
        requestLevel.value = level;
    }

    function loadingStart(): AbortController {
        requestsCount.value++;
        if (!isSequence.value) {
            updateAbortController(requestLevel.value);
        }
        isLoading.value = true;
        return requestAbortControllers.value[requestLevel.value];
    }

    function loadingStop() {
        requestsCount.value--;
        if (requestsCount.value <= 0) {
            isLoading.value = false;
        }
    }

    function loadingAbort(requestLevel: number) {
        requestAbortControllers.value.forEach((item, ind) => {
            if (ind >= requestLevel) {
                item.abort();
                delete requestAbortControllers.value[ind];
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

    function startSequence(onLevel?: number) {
        if (onLevel !== undefined) {
            setLevel(onLevel);
        }
        updateAbortController(requestLevel.value);
        isSequence.value = true;
    }

    function stopSequence() {
        isSequence.value = false;
    }

    return {
        isHidden, isLoading, loadingStart, loadingStop, loadingAbort, hidePreloader, showPreloader,
        executeInBackground, startSequence, stopSequence, setLevel
    }
})