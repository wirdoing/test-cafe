import dotenv from "dotenv";
dotenv.config();

export const DATA = {
  LOGIN: {
    USERNAME: process.env.VALID_USERNAME,
    PASSWORD: process.env.VALID_PASSWORD,
  },

  INVALID_LOGIN: {
    USERNAME: process.env.INVALID_USER,
    PASSWORD: process.env.INVALID_PASS,
  },

  CHECKOUT_INFO: {
    FIRSTNAME: process.env.VALID_USERNAME,
    LASTNAME: process.env.VALID_LASTNAME,
    ZIPCODE: process.env.VALID_POSTALCODE,
  },

  INVALID_CHECKOUT_INFO: {
    ZIPCODE: process.env.INVALID_POSTALCODE,
  },
};
