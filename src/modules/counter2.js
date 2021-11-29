// Action type
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// Action 생성자
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기값
const initialState = 0;

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// reducer
export default function counter2(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
