import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import SidebarLayout from "../components/sidebarLayout";
import "../styles/globals.css";

// adjust the theme with these custom properties for grey and button
const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
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
          <Component {...pageProps} />
        </SidebarLayout>
      )}
    </ChakraProvider>
  );
}

export default edView;
