import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import Header from "../components/header";
import SidebarLayout from "../components/sidebarLayout";
import "../styles/globals.css";

// adjust the theme with these custom properties for grey and button
const theme = extendTheme({
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

function edView({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <SidebarLayout>
          <Header />
          <Component {...pageProps} />
        </SidebarLayout>
      )}
    </ChakraProvider>
  );
}

export default edView;
