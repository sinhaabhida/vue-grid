import api from "../_api";

const getCurrentOpenings = context => {
  api.fetchCurrentOpenings
    .then(response => {
      context.commit("CURRENT_OPENINGS_UPDATED", response);
    })
    .catch(error => {
      console.error(error);
    });
};

export default {
  getCurrentOpenings
};
