import { Box } from "@chakra-ui/react";
import { useState } from "react";

// common parent to SearchBar and ServiceTable, state will be added to this component with a hook
// note services is read as props from the parent Filter and has been destructured
function FilterableServiceTable({ services }) {
  const [filterText, setFilterText] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <Box>
      <SearchBar
        filterText={filterText}
        isActive={isActive}
        onFilterTextChange={setFilterText}
        onIsActiveChange={setIsActive}
      />
      <ServiceTable
        services={services}
        filterText={filterText}
        isActive={isActive}
      />
    </Box>
  );
}

function ServiceTypeRow({ type }) {
  return (
    <tr>
      <th>{type}</th>
    </tr>
  );
}

function ServiceRow({ service }) {
  const name = service.active ? (
    service.name
  ) : (
    <span style={{ color: "red" }}>{service.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{service.totalStudents}</td>
    </tr>
  );
}

// changes over time
// not passed in from parent
// is computed based on existing state
// piece of state
function ServiceTable({ services, filterText, isActive }) {
  const rows = [];
  let lastType = null;

  services.forEach((service) => {
    if (service.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (isActive && !service.active) {
      return;
    }
    if (service.type !== lastType) {
      rows.push(<ServiceTypeRow type={service.type} key={service.type} />);
    }
    rows.push(<ServiceRow service={service} key={service.name} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Total Students</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// changes over time
// not passed in from parent
// is computed based on existing state
// piece of state
export function SearchBar({
  filterText,
  isActive,
  onFilterTextChange,
  onIsActiveChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Enter Service..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => onIsActiveChange(e.target.checked)}
        />
        {""}
        Only show active services
      </label>
    </form>
  );
}

const SERVICES = [
  { type: "program", name: "IEP", active: true, totalStudents: 30 },
  { type: "program", name: "LEP", active: true, totalStudents: 16 },
  {
    type: "intervention",
    name: "Timed Breaks",
    active: false,
    totalStudents: 13,
  },
];

export default function ReactLogic() {
  // note the prop services is read here
  return <FilterableServiceTable services={SERVICES} />;
}
