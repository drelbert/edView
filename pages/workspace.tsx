import InterventionManager from "../components/interventions/interventionManager";
import ServiceManager from "../components/spedServices/serviceManager";

export default function Workspace() {
  return (
    <div>
      <InterventionManager />
      <ServiceManager />
    </div>
  );
}
