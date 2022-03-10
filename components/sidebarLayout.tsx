import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

function SidebarLayout({ children }) {
  // note the CSS properties written right on Box component
  return (
    <Box width="100vw" height="100hv">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px">{children}</Box>
    </Box>
  );
}

export default SidebarLayout;
