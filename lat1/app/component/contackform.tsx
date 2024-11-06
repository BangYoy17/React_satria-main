"use client";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("Data submitted:", { name, message, rating });
  };

  const handleClear = () => {
    setName("");
    setMessage("");
    setRating(0);
    setSubmitted(false);
  };

  return (
    <div className="container mx-auto p-6 text-center pt-20">
      <h2 className="text-3xl font-bold mb-8">Contact Form</h2>
      <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-left font-semibold text-white">
                Nama:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-gray-500 text-black"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-left font-semibold text-white">
                Komentar:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-gray-500 text-black"
                placeholder="Tulis komentar Anda"
              ></textarea>
            </div>

            <div>
              <label className="block text-left font-semibold text-white">Rating:</label>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer text-3xl transition-transform transform hover:scale-110 ${
                      star <= rating ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-md font-semibold text-white transition-colors"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="w-full py-3 bg-gray-300 hover:bg-gray-400 rounded-md font-semibold text-black transition-colors ml-2"
              >
                Clear
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">Data Submitted</h2>
            <p className="text-black">Nama: {name}</p>
            <p className="text-black">Pesan: {message}</p>
            <p className="text-black">Rating: {rating} bintang</p>
            <p className="mt-4 text-black">
              Data di atas akan segera di input ke database. Terima kasih!
            </p>
            <button
              onClick={handleClear}
              className="mt-6 w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-md font-semibold text-white transition-colors"
            >
              Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
