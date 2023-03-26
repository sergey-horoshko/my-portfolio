import { defineStore } from 'pinia'

export const projectTheme = defineStore('theme', {
    state: () => ({
        theme: 'light',
    }),
    getters: {
        checkTheme() {
            return this.theme
        },
    },
    actions: {
        changeTheme() {
            if (this.theme === 'light') {
                return this.theme = 'dark'
            } else {
                return this.theme = 'light'
            }
        },
    },
})