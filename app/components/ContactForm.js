"use client"
import { useState } from "react";
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-purple-100 rounded-xl shadow-md transition-all hover:shadow-lg mt-12">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center animate-fadeIn">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 animate-slideIn"
      >
        <div>
          <label className="block text-purple-600 font-semibold">Name</label>
          <input
            type="text"
            required
            className="w-full mt-1 p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>
        <div>
          <label className="block text-purple-600 font-semibold">Email</label>
          <input
            type="email"
            required
            className="w-full mt-1 p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>
        <div>
          <label className="block text-purple-600 font-semibold">Message</label>
          <textarea
            required
            rows="4"
            className="w-full mt-1 p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-300"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-center text-green-600 mt-3 animate-fadeIn">
            Thank you! We will get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}
