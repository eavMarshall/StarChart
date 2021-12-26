import {reactive} from "vue";

export default {
    state: reactive({
        isLoggedIn: false,
        user: {
            id: undefined,
            name: undefined,
            email: undefined,
        },
    }),
    isLoggedIn() {
        return this.state.isLoggedIn;
    },
    setIsLoggedIn(isLoggedIn) {
        this.state.isLoggedIn = isLoggedIn;
    },
    getUser() {
        return this.state.user
    },
    setUser(user) {
        this.state.user = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
        };
    },
}