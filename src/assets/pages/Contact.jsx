import { useState } from "react";

import Input from "../components/Input";

export default function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const HANDLE_SUBMIT = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const phoneno = e.target.phoneno.value;

    if (!name || !email || !message || !phoneno) {
      return setError("Please fill out all fields");
    } else if (!email.match(REGEX)) {
      return setError("Please fill in a correct email");
    }

    try {
      setLoading(true);
      const RESPONSE = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/mail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phoneno: phoneno,
            message: message,
          }),
        }
      );

      const DATA = await RESPONSE.json();
      if(DATA.message) {
        setLoading(false)
        return setSuccess(DATA.message);
      } else {
        throw DATA.error;
      }
    } catch (error) {
      if (error) {
        setLoading(false);
        console.error(error);
        setError(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full bg-[#101017] pt-[50px] pb-[120px] font-mono">
      <div className="flex flex-col items-center w-full md:w-96">
        <h1 className="text-[#079211] font-bold text-3xl mt-32 mb-10">
          Send me a message.
        </h1>
        <p className="text-red-500 text-center">{error}</p>
        <p className="text-[#079211] text-center w-full px-[10px]">{success}</p>
        <form
          className="flex flex-col gap-5 w-full px-[10px]"
          onSubmit={HANDLE_SUBMIT}
        >
          <Input type="text" name="name" placeholder="Your Full Name" />
          <Input type="name" name="email" placeholder="Your Email" />
          <Input type="number" name="phoneno" placeholder="Your Phone Number" />
          <textarea
            placeholder="Your Message"
            name="message"
            id="message"
            className="bg-[#2B2B2B] focus:bg-slate-500 ps-5 py-3 w-full rounded-md text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-[#079211] focus:bg-slate-500 py-3 w-full rounded-md text-white cursor-pointer hover:bg-slate-500 transition-all uppercase font-bold"
          >
            {loading ? (
              <div className="ease-linear rounded-full border-4 border-t-4 border-t-white border-[#101017] h-10 w-10 animate-spin ms-[160px]"></div>
            ) : (
              "Contact Me"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
