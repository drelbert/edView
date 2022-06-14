import { useReducer } from "react";
import { Services } from "../../data/dataForRendering";
import AddService from "./AddService";
import ServiceList from "./ServiceList";
import serviceReducer from "./serviceReducer";

// this components illustrates useReducer
let serviceId = 3;

const servicesData = Services;

export default function ServiceManager() {
  // passing useReducer the reducer function and inital state
  const [services, dispatch] = useReducer(serviceReducer, servicesData);

  // event handler
  function handleAddService(text) {
    // converting to useReducer, using dispatch
    // passing to it an action object
    dispatch({
      type: "added",
      id: serviceId++,
      text: text,
    });
  }

  function handleEditService(service) {
    dispatch({
      type: "changed",
      service: service,
    });
  }

  function handleDeleteService(serviceId) {
    dispatch({
      type: "deleted",
      id: serviceId,
    });
  }

  return (
    <>
      <p>Service Manager</p>
      <AddService
        // passing props to the child component
        onAddService={handleAddService}
      />

      <ServiceList
        // passing props to the child component
        services={services}
        onEditService={handleEditService}
        onDeleteService={handleDeleteService}
      />
    </>
  );
}
