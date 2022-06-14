// this component illustrates state, adding a state var with useState
import { Box, Button } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { useWithMap } from "../data/dataForRendering";

function StatePractice() {
  // adding a state variable to allow change to be visible
  // one = the state var retains the data between renders
  // two = trigger React to render the component with new data aka re-render
  // index = the state var
  // setIndex = the setter function
  const [index, setIndex] = useState(0);

  let hasPrev = index > 0;
  let hasNext = index < useWithMap.length - 1;

  // event handler
  function handlePrevClick() {
    // implement logic here...
    if (hasPrev) {
      // setter function
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  let phase = useWithMap[index];

  return (
    <Box>
      <hr></hr>

      {/* // using the onClick event listener, passing in the handleClick as a prop */}
      <Button
        onClick={handlePrevClick}
        disabled={!hasPrev}
        sx={{ "&:hover": { bg: "#0070f3" } }}
      >
        DECREMENT
      </Button>
      <Button
        onClick={handleNextClick}
        disabled={!hasNext}
        sx={{ "&:hover": { bg: "#757575" } }}
      >
        INCREMENT
      </Button>

      <h2>
        <i>Phase: {phase}</i>
      </h2>

      <h3>
        ({index + 1} of {useWithMap.length})
      </h3>

      <hr></hr>
    </Box>
  );
}

export default StatePractice;
