import { Box, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Interventions from "../components/interventions";
import Services from "../components/services";

// page converted to add Function Component type
const DataViews: FunctionComponent = () => {
  return (
    <Box>
      <Box>
        Current Interventions
        <Interventions />
      </Box>
      <Box>
        Current Services
        <Services />
      </Box>
    </Box>
  );
};

export default DataViews;
