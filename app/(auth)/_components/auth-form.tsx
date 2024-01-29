"use client";

import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import styles from "./auth-form.module.css"
import Input from "@/components/Input";

type Variant = "LOGIN" | "REGISTER"; // union type of strings (variant can only be LOGIN or REGISTER) | it will be used for useState hook of variant and setVariant

const AuthForm = () => {
  // declare state variables
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // change variant from LOGIN to REGISTER and vice versa
  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === "LOGIN" ? "REGISTER" : "LOGIN"));
  }, [variant]);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {};

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              type="text"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={styles.button}
            >
              {variant === "LOGIN" ? "Sign in" : "Sign Up"}
            </button>
          </div>
        </form>

        <div className={styles.footer}>
          <div>
            {variant === "LOGIN"
              ? "New to Strive?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className={styles.link}>
            {variant === "LOGIN" ? "Create an account" : "Sign in"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
