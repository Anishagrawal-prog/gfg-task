import React from "react";

export default function ContactPage() {
  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-4">
        You can reach me at{" "}
        <span className="font-semibold">aniani340340@gmail.com</span> or find me
        on Instagram - <span className="font-semibold">Anishagrawal73</span>
      </p>

      {/* Gmail compose button */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=aniani340340@gmail.com&su=Hello%20Anish&body=I%20want%20to%20connect%20with%20you"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Send me an email
      </a>
    </main>
  );
}
