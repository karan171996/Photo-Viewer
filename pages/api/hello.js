// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { get } from "lodash";
export const fetchdata = (count = 10) => {
  return axios
    .get(
      `https://api.unsplash.com/photos/random?count=${count}&client_id=Dc0Kti4fXBtZd2t6SoO1g2AcWDp_coIK7xx0Ftgf2LM`
    )
    .then((res) => {
      console.log("res", res);
      return {
        json: res.data,
      };
    })
    .catch((error) => ({
      json: [],
    }));
};
