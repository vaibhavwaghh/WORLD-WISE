import "../../cssFiles/LoginSignup.css";
import { useState } from "react";

import useSignUp from "../../services/auth/useSignUp";

import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Spinner from "../../pages/Spinner";
import { useNavigate } from "react-router-dom";
import useCreateUser from "../../services/auth/useCreateUser";

function Signup() {
  /**METHOD 2 : USING REACT FORM */
  const navigate = useNavigate();
  const { signup, isLoading: isLoading1 } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { newUser, isLoading: isLoading2 } = useCreateUser();
  const { errors } = formState;
  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset() });
    newUser({ fullName, email });
  }

  function handleNavigate1() {
    navigate("/signup", { replace: true });
  }
  function handleNavigate2() {
    navigate("/login", { replace: true });
  }
  return isLoading1 || isLoading2 ? (
    <Spinner />
  ) : (
    <div className="big-container">
      <div className="container">
        <div className="header">
          <div className="text">Sign up</div>
          <div className="underline"></div>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="Full name" error={errors?.fullName?.message}>
            <Input
              type="text"
              id="fullName"
              {...register("fullName", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow label="Email address" error={errors?.email?.message}>
            <Input
              type="email"
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </FormRow>

          <FormRow
            label="Password (min 8 characters)"
            error={errors?.password?.message}
          >
            <Input
              type="password"
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password need to be minimum of 8 characters",
                },
              })}
            />
          </FormRow>

          <FormRow
            label="Repeat password"
            error={errors?.passwordConfirm?.message}
          >
            <Input
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
          </FormRow>

          <FormRow>
            <Button variation="secondary" type="reset">
              Cancel
            </Button>
            <Button>Create new user</Button>
          </FormRow>
        </Form>
        <div className="sign-up-login">
          <button className="btn" onClick={handleNavigate2}>
            Login
          </button>
          <button className="btn" onClick={handleNavigate1}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
