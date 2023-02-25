import { defineStore } from 'pinia';
export const useNotificationsStore = defineStore('notifications', {
    state: () => ({
        notificationsList: [],
        timerList: {},
        defaultDuration: 2000,
        id: 0
    }),
    getters: {
        notifications: (state) => state.notificationsList
    },
    actions: {
        addNotification(note) {
            const notification = note;
            notification.id = this.id++;
            if (notification.duration === undefined)
                notification.duration = this.defaultDuration;
            notification.isShow = false;
            this.notificationsList.push(notification);
            this.startNotificationTimer(notification.id);
        },
        getNotification(id) {
            for (const note of this.notificationsList) {
                if (note.id === id) {
                    return note;
                }
            }
            return undefined;
        },
        showNotification(id) {
            const note = this.getNotification(id);
            if (note !== undefined)
                note.isShow = true;
        },
        hideNotification(id) {
            const note = this.getNotification(id);
            if (note)
                this.hideNotificationByInst(note);
        },
        hideNotificationByInst(note) {
            note.isShow = false;
            this.stopNotificationTimer(note.id);
        },
        hideAllNotifications() {
            this.notificationsList.forEach(note => { this.hideNotificationByInst(note); });
        },
        startNotificationTimer(id) {
            const note = this.getNotification(id);
            if (note === undefined || this.timerList[id] !== undefined)
                return;
            this.timerList[id] = setTimeout(() => this.hideNotification(id), note.duration);
        },
        stopNotificationTimer(id) {
            if (this.timerList[id] === undefined)
                return;
            clearTimeout(this.timerList[id]);
            delete this.timerList[id];
        }
    }
});
