import {defineStore} from "pinia";
import {ref} from "vue";

export const useRequestStore = defineStore('requestStore', () => {
    const isLoading = ref(false);
    const isHidden = ref(false);
    const isSequence = ref(false);
    const requestsCount = ref(0);
    const abortController = ref<AbortController>(new AbortController());

    function updateAbortController() {
        abortController.value.abort();
        abortController.value = new AbortController();
    }

    function loadingStart(): AbortController {
        requestsCount.value++;
        if (!isSequence.value) {
            updateAbortController();
            requestsCount.value = 1;
        }
        isLoading.value = true;
        return abortController.value;
    }

    function loadingStop() {
        requestsCount.value--;
        if (requestsCount.value <= 0) {
            isLoading.value = false;
        }
    }

    function loadingAbort() {
        updateAbortController();
        requestsCount.value = 0;
        loadingStop();
    }

    function hidePreloader() {
        isHidden.value = true;
    }

    function showPreloader() {
        isHidden.value = false;
    }

    async function executeInBackground(fn: () => Promise<void>) {
        hidePreloader();
        await fn();
        showPreloader();
    }

    function startSequence() {
        updateAbortController();
        isSequence.value = true;
    }

    function stopSequence() {
        isSequence.value = false;
    }

    return {
        isHidden, isLoading, loadingStart, loadingStop, loadingAbort, hidePreloader, showPreloader,
        executeInBackground, startSequence, stopSequence
    }
})