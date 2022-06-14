import { useState } from "react";

export default function InterventionList({
  interventions,
  onUpdateIntervention,
  onDeleteIntervention,
}) {
  return (
    <ul>
      {interventions.map((intervention) => (
        <li key={intervention.id}>
          <Intervention
            intervention={intervention}
            onChange={onUpdateIntervention}
            onDelete={onDeleteIntervention}
          />
        </li>
      ))}
    </ul>
  );
}

function Intervention({ intervention, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let interventionContent;
  if (isEditing) {
    interventionContent = (
      <>
        <input
          value={intervention.title}
          onChange={(e) => {
            onChange({
              ...intervention,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    interventionContent = (
      <>
        {intervention.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={intervention.progressMade}
        onChange={(e) => {
          onChange({
            ...intervention,
            progressMade: e.target.checked,
          });
        }}
      />
      {interventionContent}
      <button onClick={() => onDelete(intervention.id)}>Delete</button>
    </label>
  );
}
