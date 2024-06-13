import { useState } from "react";

import Input from "../components/Input";

export default function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
      const RESPONSE = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/mail` , {
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
      });

      const DATA = await RESPONSE.json();
      setSuccess(DATA.message);

      throw DATA.error;
    } catch (error) {
      if(error) {
        console.error(error);
        setError(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full bg-[#101017] py-[120px] font-mono">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-[#079211] font-bold text-3xl mt-32">
          Send me a message.
        </h1>
        <p className="text-[#079211]">{success}</p>
        <form className="flex flex-col gap-5" onSubmit={HANDLE_SUBMIT}>
          <Input type="text" name="name" placeholder="Your Full Name" />
          <Input type="name" name="email" placeholder="Your Email" />
          <Input type="number" name="phoneno" placeholder="Your Phone Number" />
          <textarea
            placeholder="Your Message"
            name="message"
            id="message"
            className="bg-[#2B2B2B] focus:bg-slate-500 ps-5 py-3 w-96 rounded-md text-white"
          ></textarea>
          <Input type="submit" value="Contact Me" />
          <p className="text-red-500">{error}</p>
        </form>
      </div>
    </div>
  );
}
