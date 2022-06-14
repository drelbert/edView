import React, { FunctionComponent, useState } from "react";
import Router from "next/router";

const AddIntervention: FunctionComponent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [provider, setProvider] = useState("");
  const [setting, setSetting] = useState("");
  const [description, setDescription] = useState("");

  const submitStudentData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = {
        firstName,
        lastName,
        email,
        title,
        provider,
        setting,
        description,
      };
      await fetch("/api/manageStudent", {
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
      <form onSubmit={submitStudentData}>
        <h2>Add Student</h2>

        <input
          autoFocus
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="F Name"
          type="text"
          value={firstName}
        />

        <input
          autoFocus
          onChange={(e) => setLastName(e.target.value)}
          placeholder="L Name"
          type="text"
          value={lastName}
        />

        <input
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
          value={email}
        />

        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Intv Title"
          type="text"
          value={title}
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
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          type="text"
          value={description}
        />

        <button type="submit" value="Add Student">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddIntervention;
