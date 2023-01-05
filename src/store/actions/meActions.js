import getMes from "../../services/meServices.js";
import { meActions } from "../slices/me-slice.js";

export const fetchMes = () => {
  return async (dispatch) => {
    const fetchMesInfo = async () => {
      const response = await getMes();
      return response.data;
    };

    try {
      const me = await fetchMesInfo();
      dispatch(meActions.fetchMes(me));
    } catch (error) {}
  };
};
