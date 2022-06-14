// This illustrates state sharing between components
// is built on the Update function from stateSimplePractice
// state is lifted up to parent component to allow sharing between components
// so props count and onClick are passed down from parent reactPractice
// no more function to update

import { Box } from "@chakra-ui/react";

// props passed down in form of {count, onClick}
function UpdateAndShareState({ count, onClick }) {
  return (
    <Box
      border="2px"
      borderColor="gray.400"
      borderRadius="4px"
      padding="15px"
      width="50%"
    >
      <button onClick={onClick}>UPDATE</button>
      🚀 at {count} to show shared state
    </Box>
  );
}

export default UpdateAndShareState;
