import getSkills from "../../services/skillServices.js";
import { skillActions } from "../slices/skill-slice.js";

export const fetchSkill = () => {
  return async (dispatch) => {
    const fetchSkillsInfo = async () => {
      const response = await getSkills();
      return response.data;
    };

    try {
      const skills = await fetchSkillsInfo();
      dispatch(skillActions.fetchSkill(skills));
    } catch (error) {}
  };
};
