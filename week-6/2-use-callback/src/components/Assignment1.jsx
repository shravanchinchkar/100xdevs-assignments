import { memo } from "react";
import { useCallback } from "react";
import { useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

``
  const handleIncrement = useCallback(() => {
    // setCount(count + 1);

    //following function is different from above since it no longer depends on the state variable i.e. count
    setCount(function(currentCount){
        return currentCount+1
    })
  }, []);

  const handleDecrement = useCallback(() => {
    //   setCount(count - 1);
    setCount(function(currentCount){
        return currentCount-1
    })
    
  }, []);
 

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo( ({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
));
