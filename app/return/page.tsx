"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");
    console.log(sessionId);

    fetch(`/api/checkout?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <section
        id="success"
        className="h-full flex flex-col items-center justify-center"
      >
        <span className="w-3/5 mt-32 text-center">
          <p>
            We appreciate your business! A confirmation email will be sent to{" "}
            {customerEmail}.
          </p>{" "}
          <p>
            If you have any questions, please email{" "}
            <a
              href="mailto:support@kindaproblematic.com"
              className="text-blue-500 hover:underline"
            >
              support@kindaproblematic.com
            </a>
            .
          </p>
        </span>
      </section>
    );
  }

  return null;
}
