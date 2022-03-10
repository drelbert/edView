import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

//ensure flexibility as this comp will take props
const GradientLayout = function gradientLayout({
  color,
  // children,
  // image,
  // subtitle,
  // title,
  // description,
  // roundImage,
}) {
  return (
    <Box
      height="100vh"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75% )`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        test render
      </Flex>
    </Box>
  );
};

export default GradientLayout;
