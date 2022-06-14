import { useState } from "react";

export default function AddService({
  // reading in the props
  // used as like a variable
  onAddService,
}) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        placeholder="Add Service"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddService(title);
        }}
      >
        Add
      </button>
    </>
  );
}
