import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice"; // Importarmo las actions para utilizarlas

const Counter = () => {
  //agregamos el estado del componente con el useSelector
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  //definimos la constante dispatch que solo sera para usar el useDispatch
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment)}>+</button>

        <button onClick={() => dispatch(decrement)}>-</button>
      </div>
    </section>
  );
};
export default Counter;
