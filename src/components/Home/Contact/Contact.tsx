"use client";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormTelegram {
    name: string;
    email: string;
    message: string;
}

const TG_TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
const CHAD_ID = process.env.NEXT_PUBLIC_TG_CHAD_ID;

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<IFormTelegram>({ mode: "onChange" });

    const botsMessageModel = (data: IFormTelegram) => {
        let messageTG = `User's name: <b>${data.name}</b>\n`;
        messageTG += `User's email: <b>${data.email}</b>\n`;
        messageTG += `User's message: <b>${data.message}</b>\n`;
        return messageTG;
    };

    const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
        try {
            await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
                chat_id: CHAD_ID,
                parse_mode: "html",
                text: botsMessageModel(data),
            });
            reset();
            toast.success("Message sent successfully!", { autoClose: 2000 });
        } catch (error) {
            toast.error("Please try again later.", { autoClose: 2000 });
        }
    };

    return (
        <section id="contact" className="py-16 bg-gray-900 text-white">
            <div className="max-w-2xl mx-auto px-8 text-center">
                <h2 className="text-4xl sm:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600 mb-10 uppercase tracking-wide">
                    Let’s Talk Business
                </h2>
                <p className="text-lg mb-8 text-gray-400">
                    You got a project? I got the skills. Let’s get it done.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 p-8 rounded-lg shadow-xl space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-4 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-gray-600 focus:ring-0"
                            placeholder="Enter your name"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-4 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-gray-600 focus:ring-0"
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">Your Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full p-4 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-gray-600 focus:ring-0"
                            placeholder="Write your message"
                            {...register("message", { required: true })}
                        ></textarea>
                    </div>
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
