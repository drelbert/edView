import { useState } from "react";
import AddIntervention from "./addIntervention";
import InterventionList from "./interventionList";
import { Interventions } from "../../data/dataForRendering";

// this component illustrates updating arrays in state, with useState
// this has been converted to useReducer in ServiceManager component
let nextId = 3;

const data = Interventions;

export default function InterventionManager() {
  const [interventions, setInterventions] = useState(data);

  function handleAddIntervention(title: string) {
    setInterventions([
      ...interventions,
      {
        id: nextId++,
        title: title,
        progressMade: false,
      },
    ]);
  }

  function handleUpdateIntervention(nextIntervention) {
    setInterventions(
      interventions.map((i) => {
        if (i.id === nextIntervention.id) {
          return nextIntervention;
        } else {
          return i;
        }
      })
    );
  }

  function handleDeleteIntervention(interventionId) {
    setInterventions(interventions.filter((t) => t.id !== interventionId));
  }

  return (
    <>
      <AddIntervention onAddIntervention={handleAddIntervention} />
      <InterventionList
        interventions={interventions}
        onUpdateIntervention={handleUpdateIntervention}
        onDeleteIntervention={handleDeleteIntervention}
      />
    </>
  );
}
