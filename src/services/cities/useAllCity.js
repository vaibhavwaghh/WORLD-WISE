import { useQuery } from "@tanstack/react-query";
import { getAllCitiesOfUser } from "./apiCities";

export function useAllCity(userId) {
  const { isLoading, data } = useQuery({
    queryKey: ["allCities"],
    queryFn: () => getAllCitiesOfUser(userId),
  });

  return { isLoading, data };
}
