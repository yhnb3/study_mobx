import { useLocalObservable, observer } from "mobx-react-lite";
import { countStore } from "./countStore";

const CountContainer = observer(() => {
  const { value, increase, decrease } = useLocalObservable(() => countStore);

  const onIncreaseClick = () => {
    increase();
  };

  const onDecreaseClick = () => {
    decrease();
  };

  return (
    <div>
      <button onClick={onIncreaseClick}>더하기</button>
      <div>{value}</div>
      <button onClick={onDecreaseClick}>빼기</button>
    </div>
  );
});

export default CountContainer;
