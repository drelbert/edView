// this component illustrates state with a simple click counter
import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

// // declare the state var in the component
function Update(params: Number) {
  // count = state variable and in initial state of 0
  // setCount = setter function
  // [] in use to destructure and read the two values
  const [count, setCount] = useState(0);

  // the two working in conjunction
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Box>
      <Button onClick={handleClick}>Current count is {count}</Button>
    </Box>
  );
}

export default Update;
