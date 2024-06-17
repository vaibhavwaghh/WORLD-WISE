import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCityApi } from "../auth/apiAuth";

function useDeleteCity() {
  const queryClient = useQueryClient();
  const { mutate: deleteCity, isLoading } = useMutation({
    mutationFn: deleteCityApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["allCities"],
      });
    },
  });
  return { deleteCity, isLoading };
}
export default useDeleteCity;
