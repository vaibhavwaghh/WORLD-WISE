import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginApi } from "./apiAuth";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log("THIS IS FROM USE LOGIN", user);
      queryClient.setQueryData(['"user"'], user?.user);
      navigate("/app", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error("Provided email/password is incorrect");
    },
  });
  return { login, isLoading };
}

export default useLogin;
