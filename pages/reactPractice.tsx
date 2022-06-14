import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import ListFilter from "../components/renderFilter";
import ListMap from "../components/renderMap";
import StatePractice from "../components/statePractice";
import UpdateAndShareState from "../components/stateSharingComponent";
import Update from "../components/stateSimplePractice";
import ReactLogic from "../components/staticFilter";
import SubmitFormData from "../components/studentForm";

export default function ReactPractice() {
  // useState to allow for synced state between componenets passed as props
  // count = state variable
  // setCount = setter function
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <Head>
        <title>"Design to Ship 🚀" </title>
      </Head>

      <div className="pr-4 grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
        <Box border="2px" padding={4} borderColor="gray.400" borderRadius="4px">
          <StatePractice />
        </Box>

        <Box border="2px" padding={4} borderColor="gray.400" borderRadius="4px">
          <ListMap />
        </Box>

        <Box border="2px" padding={4} borderColor="gray.400" borderRadius="4px">
          <ListFilter />
        </Box>
        <Box border="2px" padding={4} borderColor="gray.400" borderRadius="4px">
          <ReactLogic />
        </Box>

        <Box border="2px" padding={4} borderColor="gray.400" borderRadius="4px">
          {/* the count and onClick props set/read here to be passed down using JSX {} braces*/}
          <UpdateAndShareState count={count} onClick={handleClick} />
          <UpdateAndShareState count={count} onClick={handleClick} />
        </Box>

        <Box border="2px" padding={4} borderColor="gray.400" borderRadius="4px">
          <SubmitFormData />
        </Box>

        <Box border="2px" padding={4} borderColor="gray.400" borderRadius="4px">
          <Update />
        </Box>
      </div>
    </>
  );
}
