import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { decrease, increase, setDiff } from "../../modules/counter";
import Counter from "./Counter";

const CounterContainer = () => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일하다.
  /*
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  */
  // useSelector Hook을 통해 매번 랜더링 될 때마다 새로운 객체
  // { number, diff }를 만ㄷ는 것이기 때문에 상태가 바뀌었는지 바뀌지 않았는지
  // 확인을 할 수 없어서 낭비 랜더링이 이루어지고 있다.
  // 이를 최적화 하기 위해 두가지 방법이 존재

  // useSelector 최적화 방법 1
  // useSelector를 여러번 사용한다.
  const number = useSelector((state) => state.counter.number);
  const diff = useSelector((state) => state.counter.diff);

  // useSelector 최적화 방법 2
  // react-redux의 shallowEqual 함수를 useSelector의 두번째 인자로 전달해 준다.
  // shallowEqual는 얕은 비교
  /*
    const { number, diff } = useSelector(
      (state) => ({
        number: state.counter.number,
        diff: state.counter.diff,
      }),
      shallowEqual
    );
  */

  // useDispatch 는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook이다.
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
