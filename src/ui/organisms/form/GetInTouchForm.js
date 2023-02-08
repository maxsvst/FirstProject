import React from "react";
import HeaderText from "../../atoms/headerText/HeaderText";
import Button from "../../molecules/button/Button";
import Input from "../../molecules/input/Input";
import { ReactComponent as Person } from "../../../icons/form/Person.svg";
import { ReactComponent as Mail } from "../../../icons/form/mail.svg";
import { ReactComponent as Error } from "../../../icons/form/Error.svg";
import { useForm } from "react-hook-form";

export default function GetInTouchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      id="getInTouch"
      className="flex justify-center items-center bg-no-repeat bg-cover bg-[url('/src/icons/form/formBackground.jpg')] py-16 px-[10px] sm:py-[70px] mt-[100px]"
    >
      <div className="flex justify-center bg-[#FCFBFA] rounded-2xl w-full sm:max-w-[712px] md:max-w-[764px] py-12 sm:px-8 lg:px-12 ">
        <div className="flex flex-col items-start">
          <HeaderText title="Let`s discuss your project" />
          <form onSubmit={handleSubmit()} className="mt-9 sm:mt-12">
            <div className="relative sm:flex sm:items-center">
              <div className="flex flex-col">
                <Input
                  register={register("fullName", {
                    required: "Please fill this mandatory field",
                  })}
                  title="Your full name "
                  value="Name Surname"
                  errors={errors}
                  icon={
                    errors.fullName ? (
                      <Error className="fill-[#E02424] stroke-[#E02424]" />
                    ) : (
                      <Person />
                    )
                  }
                  border={
                    errors.fullName
                      ? "focus-within:border-[#E02424] hover:border-[#E02424]"
                      : "focus-within:border-[#7E3AF2] hover:border-[#7E3AF2]"
                  }
                  marginLeft="sm:mr-6 md:mr-5"
                />
                {errors.fullName && (
                  <span className="sm:absolute sm:bottom-0 font-sans font-semibold text-smaller sm:text-small mt-1 sm:mb-0 sm:mt-0 text-[#E02424]">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col my-6">
                <Input
                  register={register("email", {
                    required: "Please fill this mandatory field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                      message: "Invalid email adress"
                    }
                  })}
                  title="Your email "
                  value="name@example.com"
                  icon={
                    errors.email ? (
                      <Error className="fill-[#E02424] stroke-[#E02424]" />
                    ) : (
                      <Mail />
                    )
                  }
                  border={
                    errors.email
                      ? "focus-within:border-[#E02424] hover:border-[#E02424]"
                      : "focus-within:border-[#7E3AF2] hover:border-[#7E3AF2]"
                  }
                />
                {errors.email && (
                  <span className="sm:absolute sm:bottom-0 font-sans font-semibold text-smaller sm:text-small mt-1 sm:mb-0 sm:mt-0 text-[#E02424]">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start mb-9 sm:mb-12">
                <span className="font-sans font-semibold text-xs mb-2">
                  Tell me about your project
                </span>
                <textarea
                  type="text"
                  placeholder="Add here a general description of your idea and target aim"
                  className="h-[122px] w-full max-w-[260px] sm:max-w-[648px] md:max-w-[667px] px-5 pt-[13px] rounded-2xl placeholder:text-[#696969] placeholder:text-small placeholder:font-sans placeholder:font-normal border border-solid border-[#E5E7EB] hover:border-[#7E3AF2] focus:border-[#7E3AF2] focus:outline-none active:text-[#27272A] bg-[#FCFBFA]"
                />
              </div>
            </div>
            <Button type="Submit" title="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
