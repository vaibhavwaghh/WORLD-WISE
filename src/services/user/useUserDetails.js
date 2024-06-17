import { useQuery } from "@tanstack/react-query";
import { getUsersDetails } from "../auth/apiAuth";

export function useUserDetails(emailId) {
  const { isLoading, data } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => getUsersDetails(emailId),
  });

  return { isLoading, data };
}
