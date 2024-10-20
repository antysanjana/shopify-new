import React from "react";
import { questions } from "../../../../lib/Questions";

function FAQ() {
  return (
    <div>
      <div className="max-w-screen-xl py-8 mt-10 md:py-16 w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-[40%]">
            <h1 className="text-[40px] font-bold color-primary">FAQ</h1>
            <p className="text-xl color-primary my-6">
              We&apos;ve curated a set of FAQ questions to quench your
              curiosity. Armed with this knowledge, make a choice that resonates
              with confidence.<strong> Still questions? </strong>
            </p>
            <a href="mailto:contact@bullzpot.com">
              <button className="green-button">Write to Us</button>
            </a>
          </div>
          <div className="md:w-[60%]">
            {questions.map((question, index) => (
              <div
                key={index}
                className="mb-3 py-2 border-b-[1px] border-solid border-[#c8c8d4ca]"
              >
                <div className="faq-question flex md:flex md:flex-row md:items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-semibold">{question}</h3>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs></defs>
                      <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                      <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                    </svg>
                  </span>
                </div>
                <p className="text-base font-medium"></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
