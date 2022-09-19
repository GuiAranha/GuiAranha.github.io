const INITIAL_STATE = {
  exemplo1: 0,
  exemplo2: [],
};

export default function exemplo(state = INITIAL_STATE, { type, payload }) {
  const cases = {
    LOGIN: { ...state, ...payload },
    SEARCH: { ...state, ...payload },
    SLICE: { ...state, sliceResults: payload },
    FILTER_CATEGORY: { ...state, ...payload },
  };
  return cases[type] || state;
}