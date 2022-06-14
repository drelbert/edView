import React, { FunctionComponent, useState } from "react";
import Router from "next/router";

export interface Intervention {
  title: string;
  description: string;
  provider: string;
  setting: string;
  studnet: number;
}

const AddIntervention: FunctionComponent = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");
  const [setting, setSetting] = useState("");
  const [student, setStudent] = useState("");

  const submitInterventionData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, description, provider, setting, student };
      await fetch("/api/manageIntervention", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/dataViews");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitInterventionData}>
        <h2>Add Intervention</h2>

        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />

        <input
          autoFocus
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          type="text"
          value={description}
        />

        <input
          autoFocus
          onChange={(e) => setProvider(e.target.value)}
          placeholder="Provider"
          type="text"
          value={provider}
        />

        <input
          autoFocus
          onChange={(e) => setSetting(e.target.value)}
          placeholder="Setting"
          type="text"
          value={setting}
        />

        <input
          autoFocus
          onChange={(e) => setStudent(e.target.value)}
          placeholder="Student"
          type="text"
          value={student}
        />
        <button type="submit" value="Add Intervention">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddIntervention;
