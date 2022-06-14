export default function serviceReducer(services, action) {
  switch (action.type) {
    case "added": {
      return [
        ...services,
        {
          id: action.id,
          text: action.text,
          monthlyReporting: false,
        },
      ];
    }
    case "changed": {
      return services.map((s) => {
        if (s.id === action.service.id) {
          return action.service;
        } else {
          return s;
        }
      });
    }
    case "deleted": {
      return services.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
