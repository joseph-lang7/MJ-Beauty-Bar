import Input from "./components/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppointmentButton from "../appointment-btn/appointment-btn";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form-schema";
const ContactForm = () => {
  const [clientName, setClientName] = useState("");
  const form = useForm({
    resolver: yupResolver(formSchema),
  });
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors, isSubmitting } = formState;
  const hasInput = !!watch("message");
  const onSubmit = (data) => {
    const clientName = data.fullName;
    setClientName(clientName);
    try {
      notifySuccess(clientName);
      reset();
    } catch (error) {
      console.error(error);
      notifyError();
    }
  };
  const notifySuccess = (name) =>
    toast.success(`Thank you, ${name}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyError = () =>
    toast.error("An error occurred", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="flex flex-col lg:flex-row h-full lg:items-center gap-20">
      <div className="flex-1 px-10 w-full h-full justify-center flex flex-col gap-5 pb-20 md:pb-0">
        <h2 className="text-4xl sm:text-6xl capitalize">
          Experience our exceptional{" "}
          <span className="text-[#A27474]">beauty rituals</span>
        </h2>
        <h3 className="text-2xl">Discover Radiance</h3>
        <p className="font-[poppins] max-w-[600px] ">
          Step into a world of luxurious self-care and rejuvenation with our
          carefully curated selection of premier beauty rituals. Designed to
          pamper and elevate your senses, each ritual is crafted with the finest
          ingredients and expert techniques to deliver exceptional results
        </p>
        <div className="max-w-[600px]">
          <AppointmentButton />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex-1 w-full bg-[#663130] h-full text-white py-20 px-10"
      >
        <h3 className="capitalize text-center text-4xl mb-10">
          have a <span className="italic">question?</span>
        </h3>
        {clientName && (
          <p className="capitalize font-[poppins] text-center ">
            thank you, {clientName}, we&apos;ll contact you soon!
          </p>
        )}
        <div className="w-full grid grid-cols-1 mt-3 gap-10">
          <Input
            type="text"
            registerName="fullName"
            register={register}
            errors={errors}
            labelTitle="Full Name"
            watch={watch}
          />
          <Input
            registerName="email"
            type="email"
            register={register}
            errors={errors}
            labelTitle="Email"
            watch={watch}
          />
          <Input
            registerName="phone"
            type="text"
            register={register}
            errors={errors}
            labelTitle="Phone"
            watch={watch}
          />
          <div>
            <div className="flex flex-col relative">
              <textarea
                className="border-b w-full py-1 focus:outline-none bg-transparent focus:border-black transition-colors peer h-[300px] resize-none font-[poppins]"
                {...register("message")}
                id="message"
              ></textarea>
              <label
                className={`${
                  hasInput
                    ? "-top-4 text-amber-400 text-sm absolute font-[poppins] left-0"
                    : "absolute cursor-text left-0 top-1 peer-focus:text-amber-400 peer-focus:text-sm peer-focus:-top-4 font-[poppins] transition-all duration-300 text-white"
                } `}
                htmlFor="message"
              >
                Message
              </label>
            </div>
            <p className="text-red-500 font-[poppins] absolute">
              {errors.message?.message}
            </p>
          </div>
        </div>
        <button
          disabled={isSubmitting}
          className="w-full capitalize text-neutral-300 bg-transparent border-[1px] border-white mt-10 py-2 font-[poppins] text-sm hover:bg-white hover:text-[#663130] transition-colors duration-500"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
