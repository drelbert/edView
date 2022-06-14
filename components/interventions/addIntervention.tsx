import { useState } from "react";

export default function AddIntervention({ onAddIntervention }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        placeholder="Add Intervention"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddIntervention(title);
        }}
      >
        Add
      </button>
    </>
  );
}
