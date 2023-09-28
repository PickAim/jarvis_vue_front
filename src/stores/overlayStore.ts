import { defineStore } from 'pinia'
import {ref} from "vue";
import type {OverlayName, OverlayOptions} from "@/types/OverlayTypes";

export const useOverlayStateStore = defineStore('overlayState', () => {
    const overlayName = ref<OverlayName>("login");
    const isOpen = ref(false);
    const isLoading = ref(false);
    const overlayOptions = ref<OverlayOptions[OverlayName]>();
    const effect = ref("");
    const effectOptions = ref({});

    function setOverlayName(name: OverlayName) {
        overlayName.value = name;
    }

    function openOverlay<N extends OverlayName, O extends OverlayOptions[N]>(name: N, options?: O) {
        setOverlayName(name);
        overlayOptions.value = options;
        isOpen.value = true;
    }

    function closeOverlay() {
        if (!isLoading.value) {
            isOpen.value = false;
        }
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
    //             watchHandler()
    //             isOpen.value;
    //             resolve(result.value)
    //         })
    //     })
    // }

    return {overlayName, isOpen, isLoading, effect, effectOptions, setOverlayName, openOverlay, closeOverlay,
        startLoading, stopLoading, overlayOptions}
})
