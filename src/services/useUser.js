import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}