import PROFILE_STATS from "./PROFILE_STATS";

/// action types
export const SET_PROFILE = "SET_PROFILE";

/// action creator

export const setProfile = (newStats) => ({
  type: SET_PROFILE,
  payload: newStats,
});

/// reducer

const initialState = {
  stats: PROFILE_STATS,
};

export const ProfileActions = (
  state = initialState,
  action
) => {
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
