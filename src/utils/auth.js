let IS_LOGGED_IN = false;
let AUTH_TOKEN;

const auth = {
    signIn: () => {
        // Validation First

        // Success response
        const auth_token = "HJ";
        sessionStorage.setItem("AUTH", auth_token);
        IS_LOGGED_IN = true;
        AUTH_TOKEN = auth_token;
    },
    signOut: () => {
        sessionStorage.removeItem("AUTH");
        IS_LOGGED_IN = false;
        AUTH_TOKEN = null;
    },
    isAuthenticated: () => {
        if (IS_LOGGED_IN) return true;

        const auth_token = sessionStorage.getItem("AUTH");
        if (auth_token) {
            AUTH_TOKEN = auth_token;
            return true;
        } else {
            return false;
        }
    },
    getAuthToken: () => {
        if (this.is_authenticated()) {
            return AUTH_TOKEN;
        }
    },
};

export default auth;
