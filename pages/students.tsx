import prisma from "../lib/prisma";
import { SimpleGrid, Badge, Flex, Avatar, Box, Text } from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";
import { useUser } from "../lib/hooks";

function Students({ students }) {
  const { user } = useUser();

  return (
    <Box paddingX="20px">
      <Box marginBottom="40px">
        <Text fontSize="2xl" fontWeight="bold">
          Students - {`${user?.studentCount}`} assigned to you
        </Text>
      </Box>
      <SimpleGrid minChildWidth="200px" spacing="20px">
        {students.map((student) => (
          <Box paddingX="10px" width="100%" key={student.id}>
            <Box bg="gray.400" borderRadius="4px" padding="15px" width="100%">
              <Avatar as={MdPerson} borderRadius="100%" />
              <Box fontSize="large">{student.lastName}</Box>
              <Box>{student.firstName}</Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export const getServerSideProps = async function getStudentProps() {
  const students = await prisma.student.findMany({
    orderBy: {
      lastName: "asc",
    },
  });
  // console.log(students);
  return {
    props: { students },
  };
};

export default Students;
