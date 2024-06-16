import { useMutation } from "@tanstack/react-query";
import { createNewUser } from "./apiAuth";

function useCreateUser() {
  const { mutate: newUser, isLoading } = useMutation({
    mutationFn: createNewUser,
  });
  return { newUser, isLoading };
}

export default useCreateUser;
