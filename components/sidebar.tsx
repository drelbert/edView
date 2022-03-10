import {
  Box,
  List,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
  ListIcon,
} from "@chakra-ui/layout";
import NextLink from "next/link";
import {
  MdHome,
  MdSearch,
  MdSchool,
  MdPeople,
  MdDataExploration,
} from "react-icons/md";
import { useStudent } from "../lib/hooks";

// build an array to store the menu objects
const sidebarMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "All Students",
    icon: MdSchool,
    route: "/students",
  },
  {
    name: "Data Views",
    icon: MdDataExploration,
    route: "/dataViews",
  },
];

// this is a functional component
// this function is the render function, on call
function Sidebar(params) {
  // using the custom hook to inject the values
  const { students } = useStudent();

  return (
    <Box width="75%" height="100vh" paddingX="5px" color="grey" bg="lightGrey">
      Shell
      <Box paddingY="20px" height="100%">
        <Box width="175px" marginBottom="10px" paddingX="20px">
          <List spacing={2}>
            {sidebarMenu.map((menu) => (
              <ListItem paddingX="2px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Box height="50%" overflowY="auto" paddingY="20px">
          My Current Students
          <List spacing={2}>
            {students.map((student) => (
              <ListItem paddingX="20px" key={student.id}>
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: "/userStudents/[id]",
                      query: { id: student.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>
                      {student.lastName},{student.firstName}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
