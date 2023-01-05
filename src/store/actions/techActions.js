import getTechs from "../../services/techServices.js";
import { techActions } from "../slices/tech-slice.js";

export const fetchTechs = () => {
  return async (dispatch) => {
    const fetchTechsInfo = async () => {
      const response = await getTechs();
      return response.data;
    };

    try {
      const techs = await fetchTechsInfo();
      dispatch(techActions.fetchTechs(techs));
    } catch (error) {}
  };
};
