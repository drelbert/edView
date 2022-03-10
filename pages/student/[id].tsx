import prisma from "../../lib/prisma";
import { Box } from "@chakra-ui/react";

// using server side rendering
const Student = function student() {
  return <Box>Student Data</Box>;
};

// export const getServerSideProps = function getStudentById({ query }) {};
export default Student;
