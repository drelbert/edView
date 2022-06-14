// component to illustrate event handlers
// and to illustrate adding to arrays
import { Box, Button, Input } from "@chakra-ui/react";
import { FC, useState } from "react";

// // this function is just one of many that can use the <Button/> component
// function SubmitButton({ submit }): any {
//   // adding event handler, passed as a prop to Button
//   // as this function is declared inside another, it has access to SubmitButton's props
//   function handleSubmitStudent() {}
//   // pass the onClick prop with the right handler
//   return <Button onClick={handleSubmitStudent}> {submit}</Button>;
//}

let studentId = 0;

export default function SubmitFormData(params) {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  return (
    <Box>
      <h2>Add Student</h2>
      <form
        // halting the page reload given the button inside form
        // event handler onSubmit
        onSubmit={(e) => e.preventDefault()}
        action="/send-data-here"
        method="post"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="first"
          name="first"
          className="w-50 mb-5 block"
          placeholder="Name"
        />

        <button
          className="rounded px-6 py-2 bg-indigo-600 text-white hover:opacity-50 mb-5"
          onClick={() => {
            setName("");
            setStudents([...students, { id: studentId++, name: name }]);
          }}
        >
          ADD STUDENT
        </button>
      </form>
      <ul>
        {" "}
        Added:
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </Box>
  );
}
