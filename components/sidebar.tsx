import {
  Box,
  List,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
  ListIcon,
  Text,
} from "@chakra-ui/layout";
import NextLink from "next/link";
import {
  MdHome,
  MdSearch,
  MdSchool,
  MdDataExploration,
  MdPerson,
  MdSupport,
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
    name: "Students",
    icon: MdSchool,
    route: "/students",
  },
  {
    name: "Dashboard",
    icon: MdDataExploration,
    route: "/dataViews",
  },
  { name: "My Settings", icon: MdPerson, route: "/userSettings" },
  { name: "Insights", icon: MdSupport, route: "/support" },
];

// this is a functional component
// this function is the render function, on call
function Sidebar(params) {
  // using the custom hook to inject the values
  const { students } = useStudent();

  return (
    <Box>
      <input
        type="text"
        id="first"
        name="first"
        className="m-3 w-50 mb-5 block border rounded"
        placeholder="Quick search..."
      />
      <Box height="50%" overflowY="auto" paddingY="20px">
        <div className="m-3 text-xl font-medium text-slate-500">
          My Students
        </div>
        <List spacing={2}>
          {students.map((student) => (
            <ListItem
              className="m-3 text-lg font-medium text-slate-400"
              key={student.id}
            >
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
  );
}

export default Sidebar;
