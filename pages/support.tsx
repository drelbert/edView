// purpose: illustrate pre-rendering, specifically getStaticProps
import { getSortedSupportData } from "../lib/supportBlogUsingFS";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Header from "../components/header";
import { Fragment } from "react";

export async function getStaticProps() {
  const allSupportData = getSortedSupportData();
  return {
    props: {
      allSupportData,
    },
  };
}

export default function Support({ allSupportData }) {
  return (
    <Fragment>
      <Box paddingX="20px">
        <Text fontSize="2xl" fontWeight="bold">
          Insights and Support
        </Text>
        <SimpleGrid minChildWidth="200px" spacing="20px">
          {allSupportData.map(({ id, details, date, title }) => (
            <Box
              border="2px"
              borderColor="gray.400"
              borderRadius="4px"
              padding="15px"
              width="100%"
            >
              <h2 key={id}>Title: {title}</h2>
              <br />
              Posted: {date}
              <br />
              {details}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Fragment>
  );
}
