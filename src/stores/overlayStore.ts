import { defineStore } from 'pinia'
import type {OverlayName} from "@/Objects";

export const useOverlayStateStore = defineStore('overlayState', {
    state: () => ({
        overlayName: "login",
        isOpen: false,
        isLoading: false,
        effect: "",
        effectOptions: {}
    }),
    getters: {
    },
    actions: {
        setOverlayName(name: OverlayName) {
            this.overlayName = name;
        },
        openOverlay(){
            this.isOpen = true;
        },
        closeOverlay(){
            if(!this.isLoading)
                this.isOpen = false;
        },
        startLoading(){
            if(this.isOpen)
                this.isLoading = true;
        },
        stopLoading(){
            this.isLoading = false;
        }
    }
})
