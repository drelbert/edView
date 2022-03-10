import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
} from "@chakra-ui/react";
import styles from "../..//styles/Home.module.css";
import { validateToken } from "../../lib/auth";
import { formatDate } from "../../lib/formatters";
import prisma from "../../lib/prisma";

const UserStudents = function getUserStudents({ student }) {
  return (
    <Box paddingY="20px" marginBottom="20px">
      <Accordion defaultIndex={[0]} allowMultiple w="90%" boxShadow="dark-lg">
        <AccordionItem borderColor={styles.card}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {student.lastName}, {student.firstName}
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
            Email: {student.email}
            <Button colorScheme={styles.button} size="sm">
              Edit
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <Divider />
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Interventions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {student.interventions.map((intervention) => (
            <AccordionPanel pb="4" key={intervention.id}>
              <li>Title: {intervention.title}</li>
              <li>Description: {intervention.description}</li>
              <li>Updated: {formatDate(intervention.updatedAt)} </li>
            </AccordionPanel>
          ))}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export const getServerSideProps = async function getStudentsByUser({
  query,
  req,
}) {
  // error handling, redirect user back to signin page if token expired
  let user;
  try {
    // get the user id
    user = validateToken(req.cookies.EDVIEW_ACCESS_TOKEN);
  } catch (e) {
    // return a redirect object with two properties
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }

  //  array destructuring, but just need the student hence [student]
  const [student] = await prisma.student.findMany({
    where: {
      // query.id = student id, based on the paramter of the route userStudents/[id]
      // aka id on the url
      // + converts the query string to number as all IDs are numbers
      id: +query.id,
      // also the current user id
      userId: user.id,
    },
    // using the relation between user and student
    include: {
      interventions: {
        include: {
          student: {
            select: {
              interventions: true,
            },
          },
        },
      },
    },
  });
  // console.log(student);
  return {
    props: { student },
  };
};

export default UserStudents;
