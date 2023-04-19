import { defineStore } from "pinia"

export const UserStore = defineStore("user", {
    state: () => ({
        userData: ":)"
    }),
})