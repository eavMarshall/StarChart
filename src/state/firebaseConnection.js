import {reactive} from "vue";

const state = reactive({
    firebaseApp: false,
});

export default {
    setFireBaseApp: (app) => {
        if (!state.firebaseApp) {
            state.firebaseApp = app;
            return;
        }

        throw new Error("firebase already set");
    }
};