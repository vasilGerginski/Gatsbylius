//You can face an issue with checkout infos checkout this topic https://github.com/Sylius/ShopApiPlugin/issues/241
const axios = require("axios");
const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const submitCustomerInfo = async (storeState, customerInfos) => {
  if (storeState.cartKey) {
    await axios
      .put(`${SYLIUS_URL}/shop-api/checkout/${storeState.cartKey}/address`, {
        "shippingAddress": {
          "firstName": customerInfos.firstName,
          "lastName": customerInfos.lastName,
          "countryCode": customerInfos.country,
          "street": customerInfos.address,
          "city": customerInfos.city,
          "postcode": customerInfos.postalCode,
          "provinceName": "",
          "company": "",
          "phoneNumber": customerInfos.phone
        },
        "billingAddress": {
          "firstName": customerInfos.firstName,
          "lastName": customerInfos.lastName,
          "countryCode": customerInfos.country,
          "street": customerInfos.address,
          "city": customerInfos.city,
          "postcode": customerInfos.postalCode,
          "provinceName": "",
          "company": "",
          "phoneNumber": customerInfos.phone
        }
      })
      .then(response => {
        if (response.code === 204) {
          //@todo: define what do here (valid)
        }
      })
      .catch(error => {
        console.error("Error on cart creation ", error);
      });
  }
};
