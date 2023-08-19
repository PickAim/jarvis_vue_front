import {defineStore} from "pinia";
import {ref} from "vue";

export const useRequestStore = defineStore('requestStore', () => {
    const isLoading = ref(false);
    const isHidden = ref(false);
    const abortController = ref<AbortController | undefined>();

    function loadingStart(controller: AbortController) {
        if (abortController.value) {
            abortController.value.abort();
        }
        abortController.value = controller;
        isLoading.value = true;
    }

    function loadingStop() {
        isLoading.value = false;
        abortController.value = undefined;
    }

    function loadingAbort() {
        if (abortController.value) {
            abortController.value.abort();
        }
        loadingStop();
    }

    function hidePreloader() {
        isHidden.value = true;
    }

    function showPreloader() {
        isHidden.value = false;
    }

    function executeInBackground(fn: () => Promise<void>) {
        isHidden.value = true;
        fn().then(() => {
            isHidden.value = false;
        });
    }

    return {
        isLoading, isHidden, abortController, loadingStart, loadingStop, loadingAbort,
        hidePreloader, showPreloader, executeInBackground
    }
})