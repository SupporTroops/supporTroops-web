const url = "http://localhost:5000";

const connection = {
    login: async (loginDetails) => {
        try {
            const response = await fetch(`${url}/user/login`, {
                method: "POST",
                body: JSON.stringify(loginDetails),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (err) {
            console.error(err);
            return {
                status: "error",
                message: "Some error occured. Try again later",
            };
        }
    },
    createAccount: async (signupDetails) => {
        try {
            const response = await fetch(`${url}/user/signup`, {
                method: "POST",
                body: JSON.stringify(signupDetails),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (err) {
            console.error(err);
            return {
                status: "error",
                message: "Some error occured. Try again later",
            };
        }
    },
};

export default connection;
