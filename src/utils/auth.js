import Joi from "joi";
import connection from "./connection";

let IS_LOGGED_IN = false;
let AUTH_TOKEN;

const storeToken = (token) => {
    sessionStorage.setItem("AUTH", token);
    IS_LOGGED_IN = true;
    AUTH_TOKEN = token;
};

// Schemas
const loginSchema = Joi.object({
    email: Joi.string()
        .required()
        .email({ tlds: { allow: false } })
        .messages({
            "string.email": "Email is not Valid",
            "string.required": "Email is required",
            "string.empty": "Email is required",
        }),
    password: Joi.string().required().min(3).messages({
        "string.required": "Password is required",
        "string.empty": "Password is required",
        "string.min": "Password should be at least {#limit} characters long",
    }),
});

const signupSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.required": "Name is required",
        "string.empty": "Name is required",
    }),
    email: Joi.string()
        .required()
        .email({ tlds: { allow: false } })
        .messages({
            "string.email": "Email is not Valid",
            "string.required": "Email is required",
            "string.empty": "Email is required",
        }),
    phone: Joi.string()
        .required()
        .length(10)
        .pattern(/^[0-9]+$/)
        .messages({
            "string.pattern.base": `Phone number must only contain digits.`,
            "string.required": "Phone number is required",
            "string.empty": "Phone number is required",
            "string.length": "Phone number should be have exactly 10 digits",
        })
        .required(),
    password: Joi.string().required().min(3).messages({
        "string.required": "Password is required",
        "string.empty": "Password is required",
        "string.min": "Password should be at least {#limit} characters long",
    }),
    confirmPassword: Joi.valid(Joi.ref("password")).messages({
        "any.only": "Passwords do not match",
    }),
});

// API Object
const auth = {
    signIn: async (loginDetails) => {
        // Validation
        const { error } = loginSchema.validate(loginDetails);
        if (error) {
            return {
                status: "error",
                message: error.message,
            };
        }

        // Fetch API
        const response = await connection.login(loginDetails);

        // Success response
        if (response.status === "success") storeToken(response.token);
        return response;
    },

    signUp: async (signupDetails) => {
        // Validation
        const { error } = signupSchema.validate(signupDetails);
        if (error) {
            return {
                status: "error",
                message: error.message,
            };
        }

        // Fetch API
        const response = await connection.createAccount(signupDetails);

        // Success response
        if (response.status === "success") storeToken(response.token);
        return response;
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

    getUserId: () => {
        let userId;
        // Get User ID from token
        return userId;
    },
};

export default auth;
