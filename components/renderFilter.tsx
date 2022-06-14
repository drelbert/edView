// render with filter
import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import { useWithFilter } from "../data/dataForRendering";

function ListFilter(person: object) {
  // first create an array of groups from the array of objects
  const groupOne = useWithFilter.filter(
    (person) => person.group === "Group One"
  );

  const groupTwo = useWithFilter.filter(
    (person) => person.group === "Group Two"
  );

  // next map over the group
  const groupOneList = groupOne.map((person) => (
    <Fragment key={person.id}>
      <p>
        <b>{person.lead}:</b>
        head of the {person.team} team working from {person.location}.
      </p>
    </Fragment>
  ));

  const groupTwoList = groupTwo.map((person) => {
    <Fragment key={person.id}>
      <p>
        <b>
          <b>{person.lead}</b>
          part of the {person.title} team working from {person.location}.
        </b>
      </p>
    </Fragment>;
  });

  return (
    <div>
      <Box>
        <b>Group One</b>
        <ul>
          {groupOne.map((person) => (
            <li key={person.id}>
              <p>
                <b>{person.lead}</b>, {person.team} team lead, working from{" "}
                {person.location}
              </p>
            </li>
          ))}
        </ul>
        <b>Group Two</b>
        <ul>
          {groupTwo.map((person) => (
            <li key={person.id}>
              <p>
                <b>{person.lead}</b>, {person.team} team lead, working from
                {person.location}, {person.description}
              </p>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default ListFilter;
