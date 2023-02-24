import { defineStore } from 'pinia'

export interface NotificationInput{
    header: string;
    body: string;
    type: "error" | "notify" | "warning";
    duration?: number;
}

export interface Notification extends NotificationInput{
    id: number;
    isShow: boolean;
}

export const useNotificationsStore = defineStore('notifications', {
    state: () => ({
        notificationsList: [] as Notification[],
        defaultDuration: 3000,
        id: 0
    }),
    getters: {
        notifications: (state): Notification[] => state.notificationsList,
    },
    actions: {
        addNotification(note: NotificationInput){
            const notification = note as Notification;
            notification.id = this.id++;
            if(notification.duration === undefined) notification.duration = this.defaultDuration;
            notification.isShow = false;
            this.notificationsList.push(notification);
        },
        hideAllNotifications(){
            this.notificationsList.forEach(note => {note.isShow = false})
        },
        showNotification(id: number){
            for(const note of this.notificationsList){
                if(note.id === id){
                    note.isShow = true;
                }
            }
        },
        hideNotification(id: number){
            for(const note of this.notificationsList){
                if(note.id === id){
                    note.isShow = false;
                }
            }
        }
    }
})
