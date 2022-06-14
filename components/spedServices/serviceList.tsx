import { useState } from "react";

export default function ServiceList({
  // reading in the props
  // used as like a variable
  services,
  onEditService,
  onDeleteService,
}) {
  return (
    <ul className="container mx-auto py-6 bg-slate-500 rounded-xl ">
      {services.map((service) => (
        <li
          className="p-6 my-4 max-w-sm mx-auto bg-slate-200 rounded-xl shadow-lg flex items-left space-x-4 text-slate-500 "
          key={service.id}
        >
          <Service
            service={service}
            onChange={onEditService}
            onDelete={onDeleteService}
          />
        </li>
      ))}
    </ul>
  );
}

function Service({ service, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let serviceContent;
  if (isEditing) {
    serviceContent = (
      <>
        <input
          value={service.title}
          onChange={(e) => {
            onChange({
              ...service,
              title: e.target.value,
            });
          }}
        />
        <button
          className="inline-flex items-center mx-2 px-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    serviceContent = (
      <>
        {service.title || service.text} -
        <button
          className="inline-flex items-center mx-2 px-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={service.monthlyReporting}
        onChange={(e) => {
          onChange({
            ...service,
            monthlyReporting: e.target.checked,
          });
        }}
      />
      {serviceContent}
      <button
        className="inline-flex items-center mx-2 px-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => onDelete(service.id)}
      >
        Delete
      </button>
    </label>
  );
}
