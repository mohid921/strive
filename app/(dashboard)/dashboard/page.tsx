"use client";

import Input from "@/components/Input";
import styles from "./dashboard.module.css";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextArea from "@/components/text-area";
import Select from "@/components/Select";
import Image from "next/image";
import { Plus } from "lucide-react";
import { countriesList } from "@/constants/countries";
import { universitiesList } from "@/constants/universities";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      countries: [],
      university: [],
      noField: [],
    },
  });

  const countries = watch("countries");
  const university = watch("university");
  const noField = watch("noField");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {};


  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className={styles.container}>
      <h6 className={styles.info}>Personal Information: </h6>
      <div className={styles.profile}>
        <Image
          src="/profile.png"
          alt="profile"
          width={150}
          height={150}
          style={{ objectFit: "cover", borderRadius: "99999px" }}
        />
        <div>
          <p className={styles.profileText}>Jane Copper</p>
          <p className={styles.profileEmail}>hellojane56@gmail.com</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.col2}>
          <Input
            id="firstName"
            label="First Name"
            placeholder="Cody"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="lastName"
            label="Last Name"
            placeholder="Fisher"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
        </div>
        <div className={styles.col2}>
          <Input
            id="email"
            label="Email"
            type="text"
            placeholder="hello@internationalstrivemail.com"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Select
            disabled={isLoading}
            label="Countries"
            placeholder="UK"
            options={countriesList}
            onChange={(value) => setValue("countries", value)}
            value={countries}
          />
        </div>

        <TextArea
          id="bio"
          label="Bio"
          placeholder="About me..."
          register={register}
          errors={errors}
          disabled={isLoading}
        />

        <div className={styles.line} style={{ padding: "0.5rem 0" }} />

        <h6 className={styles.info}>Company Information</h6>

        <div className={styles.col3}>
          <Input
            id="companyName"
            label="Company Name"
            type="text"
            placeholder="Soylent Corp"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Select
            disabled={isLoading}
            label="Job Title"
            placeholder="Central Directives Officer"
            options={options}
            onChange={(value) => setValue("noField", value)}
            value={noField}
          />
          <div>
            <label className={styles.label}>Upload Company Logo</label>
            <button
              className={styles.button}
              style={{
                padding: "0.5rem",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "0.25rem",
              }}
            >
              Upload Asset <Plus size={30} style={{ paddingLeft: ".5rem" }} />
            </button>
          </div>
        </div>

        <div className={styles.line} style={{ padding: "0.5rem 0" }} />

        <h6 className={styles.info}>Education Information:</h6>

        <div className={styles.col3}>
          <Select
            disabled={isLoading}
            label="University Name"
            placeholder="Sunny Hills High University"
            options={universitiesList}
            onChange={(value) => setValue("university", value)}
            value={university}
          />
          <Select
            disabled={isLoading}
            label="Field of Study"
            placeholder="Nano-Sociology"
            options={options}
            onChange={(value) => setValue("noField", value)}
            value={noField}
          />
          <Input
            id="course-of-study"
            label="Course of Study"
            type="text"
            placeholder="Nanoscale Social Justice"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
        </div>
        <div className={styles.buttonCover}>
          <button className={styles.buttonOutline} type="reset">
            Reset
          </button>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
