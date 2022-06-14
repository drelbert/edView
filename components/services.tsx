import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Tbody, Th } from "@chakra-ui/react";
import { useService } from "../lib/hooks";

function Services(params) {
  const { service } = useService();

  return (
    <Box padding="5px" marginBottom="20px">
      <Box marginBottom="30px"></Box>
      <Table variant="unstyled">
        <Thead borderBottom="1px solid" borderColor="black">
          <Tr>
            <Th>Type</Th>
            <Th>Coordinator</Th>
            <Th>Description</Th>
            <Th>Student</Th>
          </Tr>
        </Thead>
        <Tbody>
          {service.map((service) => (
            <Tr
              sx={{
                transition: "all .3s ",
                "&:hover": {
                  bg: "rgba(255,255,255, 0.1)",
                },
              }}
              key={service.id}
            >
              <Td>{service.type}</Td>
              <Td>{service.coordinator}</Td>
              <Td>{service.description}</Td>
              <Td>{service.student.lastName}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Services;
