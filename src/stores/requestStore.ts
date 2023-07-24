import {defineStore} from "pinia";
import {ref} from "vue";

export const useRequestStore = defineStore('requestStore', () => {
    const isLoading = ref(false);
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
            abortController.value = undefined;
        }
        isLoading.value = false;
    }

    return {isLoading, abortController, loadingStart, loadingStop, loadingAbort}
})