"use client"

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/../../lib/supabaseClient"


function SubmitButton() {
    return (
        // <button className=" " type="submit">Share message</button>

        <button className="self-end border-4 border-inactive-button-grey rounded-xl shadow-menu-shadow shadow-inactive-button-grey text-inactive-button-grey dark:shadow-none h-16 px-4
            pressed-btn
            flex justify-center items-center gap-1
        ">
            <p className="font-extrabold text-lg tracking-tight">Share message</p>
            <svg width="50px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="p-0.5 stroke-inactive-button-grey">
                <path d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z" stroke="inactive-button-grey" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}


type FormValues = {
    name: string,
    email: string,
    phone?: string,
    message: string,
}


export default function Form() {

    const { register, handleSubmit, reset, formState, formState: { errors , isSubmitSuccessful } } = useForm<FormValues>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
    }});


    const onSubmit = async (formData: FormValues) => {
        console.log(formData)
        const { data, error } = await supabase
        .from('Form Data')
        .insert([formData]);

        if (error) {
            console.error('Error saving form submission:', error);
        } else {
            console.log('Form submission saved successfully:', data);
        }
    };


    useEffect(() => {
        const submitMessage = document.getElementById('submitMessage');
        if (formState.isSubmitSuccessful) {
            reset();
            submitMessage!.style.visibility = "visible";
        }
    }, [formState, reset])

    
    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-x-6">
                <div className="grow">
                    <p className="text-sm text-form-grey">Name</p>
                    <input 
                        placeholder={"Anton Belov"}
                        className="lighter-border shadow-form-shadow h-16 w-full my-3 px-4 pressed-input"
                        {...register("name", {required: "This is a required field.", minLength: {value: 4, message: 'Min length is 4.'}})}
                    />
                </div>
                <div className="grow">
                    <p className="text-sm text-form-grey">Email</p>
                    <input 
                        placeholder={"anton.belov.al7@gmail.com"}
                        className="lighter-border shadow-form-shadow h-16 w-full my-3 px-4 pressed-input"
                        {...register("email", {required: "This is a required field.", minLength: {value: 11, message: 'Min length is 11.'}, maxLength: {value: 13, message: 'Max length is 13.'}})}
                    />
                </div>
                <p className="text-red-500 mx-1">{errors.name?.message}</p>
                <p className="text-red-500 mx-1">{errors.email?.message}</p>
            </div>
            <div>
                <p className="text-sm text-form-grey">Phone</p>
                <input
                    placeholder={"07999874226"}
                    className="lighter-border shadow-form-shadow h-16 w-full my-3 px-4 pressed-input"
                    {...register("phone", {minLength: {value: 4, message: 'Min length is 4.'}})}
                />
            </div>
            <div>
                <p className="text-sm text-form-grey">Message</p>
                <textarea 
                className="lighter-border shadow-form-shadow h-32 w-full my-3 px-4 py-3 pressed-input"
                placeholder="Hey, I love your work..."
                {...register("message", {required: "This is a required field.", minLength: {value: 4, message: 'Min length is 4.'}})}
                />
                <p className="text-red-500 mx-1">{errors.message?.message}</p>
            </div>
            <p id="submitMessage" className={`text-center invisible`}>Form successfully submitted!</p>
            <SubmitButton />
        </form>
    );
}