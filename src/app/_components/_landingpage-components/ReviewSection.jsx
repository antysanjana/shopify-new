import React from "react";
import { testimonials } from "../../../../lib/Testimonials";

function ReviewSection() {
  return (
    <div className="max-w-screen-xl w-10/12 mx-auto mt-6">
      <div className="text-center">
        <h1 className="text-[40px] color-primary font-bold">
          What Our Lovely <br /> Customers Say!
        </h1>
      </div>
      <div className="columns-1 md:columns-2 gap-5 mt-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card-style">
            <p className="text-base">{testimonial.text}</p>
            <h2 className="review-name">{testimonial.name}</h2>
            <a
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="review-link"
            >
              <span>{testimonial.siteDescription}</span>
            </a>
            <span>👉</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
