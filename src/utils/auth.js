import connection from "./connection";

let IS_LOGGED_IN = false;
let AUTH_TOKEN;

const storeToken = (token) => {
    sessionStorage.setItem("AUTH", token);
    IS_LOGGED_IN = true;
    AUTH_TOKEN = token;
};

const auth = {
    signIn: async (loginDetails) => {
        // Validation First

        // Fetch API
        const auth_token = await connection.login(loginDetails);
        if (!auth_token) return false;

        // Success response
        storeToken(auth_token);
        return true;
    },

    signOut: () => {
        sessionStorage.removeItem("AUTH");
        IS_LOGGED_IN = false;
        AUTH_TOKEN = null;
    },

    signUp: async (signupDetails) => {
        // Validation First

        // Fetch API
        const auth_token = await connection.signup(signupDetails);
        if (!auth_token) return false;

        // Success response
        storeToken(auth_token);
        return true;
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

    getUserId: () => {
        let userId;
        // Get User ID from token
        return userId;
    },
};

export default auth;
