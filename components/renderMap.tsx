// update array in state with setter function, no mutation
// and render data from array with map
import { Box } from "@chakra-ui/react";
import { useWithMap } from "../data/dataForRendering";

function ListMap() {
  // just map over the array
  const phaseList = useWithMap.map((phase) => <li key={phase}>{phase}</li>);

  return (
    <Box>
      <b>All Services</b>
      <ul>{phaseList}</ul>
    </Box>
  );
}
export default ListMap;
