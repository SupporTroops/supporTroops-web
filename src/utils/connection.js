// const url = "http://localhost:5000";
const url = "https://interior-avenue-backend.herokuapp.com/api";

const connection = {
    login: async (loginDetails) => {
        try {
            const response = await fetch(`${url}/user/signin`, {
                method: "POST",
                body: JSON.stringify(loginDetails),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(loginDetails, response)
            if(response.status == 201){
                return true;
            }
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
            const response = await fetch(`${url}/users/signup`, {
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
