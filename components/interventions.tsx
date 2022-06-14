import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Tbody, Th } from "@chakra-ui/react";
import NextLink from "next/link";
import { useIntervention } from "../lib/hooks";

function Interventions(params) {
  const { interventions } = useIntervention();
  return (
    <Box>
      <Box padding="5px" marginBottom="20px">
        <Box marginBottom="30px"></Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="black">
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Student</Th>
              <Th>Provider</Th>
              <Th>Last Updated</Th>
            </Tr>
          </Thead>
          <Tbody>
            {interventions.map((intervention) => (
              <Tr
                sx={{
                  transition: "all .3s ",
                  "&:hover": {
                    bg: "rgba(255,255,255, 0.1)",
                  },
                }}
                key={intervention.id}
              >
                <Td>{intervention.title}</Td>
                <Td>{intervention.description}</Td>

                <NextLink
                  href={{
                    pathname: "/userStudents/[id]",
                    query: { id: intervention.studentId },
                  }}
                  passHref
                >
                  <td className="underline text-blue-600 hover:text-blue-700 cursor-pointer">
                    {intervention.student.lastName},
                    {intervention.student.firstName}
                  </td>
                </NextLink>

                <Td>{intervention.provider}</Td>
                <Td>{intervention.updatedAt}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default Interventions;
