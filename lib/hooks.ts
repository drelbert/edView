import useSWR from "swr";
import fetcher from "./fetcher";

// set of custom hooks

// first hook to get the user at /getUser
export const useUser = function user() {
  // internal hook with destructured data and error
  // swr hook library for client side data fetching and then stores it locally (redux like) in cache
  const { data, error } = useSWR("/user", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

// second hook to get service at /service
export const useService = function service() {
  const { data, error } = useSWR("/service", fetcher);

  return {
    service: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};

// third hook to get student(s) at /student
export const useStudent = function student() {
  // using types via Prisma
  const { data, error } = useSWR("/student", fetcher);

  return {
    students: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

// third hook to get interentions
export const useIntervention = function intervention() {
  // using types via Prisma
  const { data, error } = useSWR("/intervention", fetcher);

  return {
    interventions: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
