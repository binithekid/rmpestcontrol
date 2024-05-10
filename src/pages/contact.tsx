import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import Map from "@/components/Map";
import { Montserrat } from "next/font/google";
import MobileNavBar from "@/components/MobileNavBar";
import Head from "next/head";
import NavBarNew from "@/components/NavBarNew";

const montserrat = Montserrat({ subsets: ["latin"] });

const Contact = () => {
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [pestType, setPestType] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [err, setErr] = useState("");

  const handleCall = () => {
    const phoneNumber = "tel:+442086793330"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      name: name,
      number: number,
      topic: topic,
      pestType: pestType,
      email: email,
      message: message,
    };

    setStatus("loading");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("done");
        // Reset form after successful submission
        setName("");
        setNumber("");
        setPestType("");
        setEmail("");
        setTopic("");
        setMessage("");
      } else {
        console.error("Failed to submit form:", response.statusText);
        setErr("Error sumbitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErr("Error sumbitting form");
    }
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="We offer local pest control treatments for rats, mice, bed bugs, cockroaches and other insects."
        />
        <title>Contact | RM Pestokill</title>
      </Head>
      <div
        className={`w-full flex flex-col bg-gradient-to-b from-gray-100 via-white to-white ${montserrat.className}`}
      >
        <NavBar />
        <NavBarNew />
        <MobileNavBar />
        <div className="w-full px-4 md:px-20 mb-12 gap-8 flex h-auto mt-[5rem] items-center justify-center flex-col md:flex-row">
          <div className="md:w-1/2 w-full flex flex-col gap-3 md:h-[25rem] justify-between flex-grow">
            <div>
              <h1 className="font-display font-bold text-3xl tracking-normal text-gray-800 sm:text-4xl">
                Contact Us
              </h1>
              <div className="md:w-3/4">
                <p className="text-sm mt-1 text-gray-700">
                  Use the form to contact us in regard to the pest control
                  services we offer. We will get back to you as soon as we can!
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href="mailto:rmpestokill@gmail.com"
                    className="text-gray-700 transition-all hover:opacity-70"
                  >
                    <span className="mr-2">✉️ </span>
                    rmpestokill@gmail.com
                  </a>

                  <p
                    onClick={handleCall}
                    className="cursor-pointer transition-all hover:opacity-70 text-gray-700 "
                  >
                    <span className="mr-2">📞 </span>020 8679 3330
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[90%] md:flex hidden gap-10">
              <div className="w-1/3">
                <p className="text-gray-700">Support</p>
                <p className="text-gray-700 text-sm">
                  Send us a message if you need support with a service we have
                  provided
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-gray-700">Feedback </p>
                <p className="text-gray-700 text-sm">
                  If you have any feedback on our work we would love to hear
                  from you{" "}
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-gray-700">Enquiry</p>
                <p className="text-gray-700 text-sm">
                  Drop us a message if you have an enquiry about a service we
                  offer{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 flex-col gap-3">
            <form onSubmit={handleSubmit} className="flex gap-6 flex-col">
              <select
                required
                className="w-full bg-white appearance-none bg-transparent border border-gray-300 md:p-3 text-sm md:text-base p-2 rounded custom-select text-gray-700"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              >
                <option value="">Select a topic</option>
                <option value="Support">Quote</option>
                <option value="Enquiry">Enquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full bg-transparent text-gray-800 bg-white border border-gray-300 md:p-3 text-sm md:text-base p-2 rounded"
                placeholder="Name"
              />
              <input
                required
                value={number}
                onChange={(event) => setNumber(event.target.value)}
                className="w-full bg-transparent text-gray-800 bg-white border border-gray-300 md:p-3 text-sm md:text-base p-2 rounded"
                placeholder="Phone Number"
              />{" "}
              <input
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-transparent text-gray-800 bg-white border border-gray-300 md:p-3 text-sm md:text-base p-2 rounded"
                placeholder="Email"
              />
              <input
                required
                value={pestType}
                onChange={(event) => setPestType(event.target.value)}
                className="w-full bg-transparent text-gray-800 bg-white border border-gray-300 md:p-3 text-sm md:text-base p-2 rounded"
                placeholder="Type of Pest Control Required"
              />
              <textarea
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={6}
                className="w-full bg-transparent text-gray-800 bg-white border border-gray-300 md:p-3 text-sm md:text-base p-2 rounded"
                placeholder="How can we help?"
              />
              <button
                type="submit"
                className="border hover:opacity-70 font-semibold bg-white transition-all border-gray-300 w-max py-2 md:px-4 px-3 text-sm text-gray-700 uppercase rounded"
              >
                {!status ? (
                  <p>Submit</p>
                ) : status === "loading" ? (
                  <p>Sending ...</p>
                ) : status === "done" ? (
                  <p>Sent!</p>
                ) : null}
              </button>
              {err && <p className="text-red-400 text-sm">{err}</p>}
            </form>
          </div>
        </div>
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
