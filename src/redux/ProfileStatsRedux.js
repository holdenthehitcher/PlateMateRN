import PROFILE_STATS from "./PROFILE_STATS";

/// action types
export const SET_PROFILE = "SET_PROFILE";

/// action creator

export const setProfile = (newStats) => {
  const { weight, feet, inches, age, sex, stressFactor, goalWeight } = newStats;
  const weightKg = weight / 2.2;
  const heightCm = feet * 30.48 + inches * 2.54;
  const caloricExpend =
    (10 * weightKg + 6.25 * heightCm - 5 * age + sex) * stressFactor;
  const newDailyCalories =
    Math.ceil(weight > goalWeight ? caloricExpend - 500 : caloricExpend + 500);
  const updatedNewStats = {
    ...newStats,
    dailyCalories: newDailyCalories,
    caloriesLeft: newDailyCalories,
  };
  return {
    type: SET_PROFILE,
    payload: updatedNewStats,
  };
};

/// reducer

const initialState = {
  stats: PROFILE_STATS,
};

export const ProfileActions = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        stats: {
          ...state.stats,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
