import { defineStore } from 'pinia'
import type {OverlayName} from "@/Objects";
import {ref} from "vue";

export const useOverlayStateStore = defineStore('overlayState', () => {
    const overlayName = ref("login");
    const isOpen = ref(false);
    const isLoading = ref(false);
    const overlayOptions = ref<any>({});
    const effect = ref("");
    const effectOptions = ref({});

    function setOverlayName(name: OverlayName) {
        overlayName.value = name;
    }

    function openOverlay<O>(options?: O) {
        isOpen.value = true;
        overlayOptions.value = options;
    }

    function closeOverlay() {
        if (!isLoading.value)
            isOpen.value = false;
    }

    function startLoading() {
        if (isOpen.value)
            isLoading.value = true;
    }

    function stopLoading() {
        isLoading.value = false;
    }

    // function waitForResult<R>(): Promise<R | undefined>{
    //     return new Promise((resolve) => {
    //         let watchHandler: WatchStopHandle;
    //         watchHandler = watch(result, ()=>{
    //             console.log(watchHandler)
    //             watchHandler()
    //             isOpen.value;
    //             resolve(result.value)
    //         })
    //     })
    // }

    return {overlayName, isOpen, isLoading, effect, effectOptions, setOverlayName, openOverlay, closeOverlay,
        startLoading, stopLoading, overlayOptions}
})
