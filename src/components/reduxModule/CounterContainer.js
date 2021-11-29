import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../../modules/counter2";
import Counter from "./Counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter2);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
