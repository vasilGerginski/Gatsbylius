const axios = require("axios");

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const tests = async () => {
    await axios
        .post(`${SYLIUS_URL}/shop-api/login`, {
            email: "d+tes@gmail.com",
            password: "",
            token: "azer"
        }).then(response => {
            console.log(response)
        })

}


export const register = async (data, userState, userDispatch) => {

    const userData = {
        email: data.email,
        plainPassword: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        channel: "WEB_GB",
    }

    await axios
        .post(`${SYLIUS_URL}/shop-api/register`, userData)
        .then(async response => {
            if (response.status === 204) {
                console.log("Register successfully")
                await axios
                    .post(`${SYLIUS_URL}/shop-api/login`, {
                        email: userData.email,
                        password: userData.plainPassword,
                        token: "!"
                    }).then(response => {
                        console.log(response)
                    })
            }
        })
        .catch(err => {
            console.error("Error on add to cart", err);
        });
}