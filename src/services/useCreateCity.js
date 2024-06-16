import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCity } from "./apiAuth";

function useCreateCity() {
  const queryClient = useQueryClient();
  const { mutate: createCity, isLoading } = useMutation({
    mutationFn: createNewCity,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["allCities"],
      });
    },
  });
  return { createCity, isLoading };
}

export default useCreateCity;
