import React from "react";

function ReviewSection() {
  const testimonials = [
    {
      text: "The implementation for my website was executed swiftly and efficiently. The website is so much advanced and faster than ever before! Would recommend.",
      name: "Richard",
      link: "/",
      siteDescription: "Mug Collector Website",
    },
    {
      text: "Top communication, top service, delivers as discussed. Bullzpot was willing to do changes that came up further in the process. - very satisfying!",
      name: "Stognarelli",
      link: "/",
      siteDescription: "Perfume Brand Website",
    },
    {
      text: "Many thanks for the fast processing of my theme customization requests, as always very good contact, thank you!",
      name: "Monique",
      link: "/",
      siteDescription: "Sewing Accessories Website",
    },
    {
      text: "Meeting a particular deadline for this task was essential for us. I approached Anna, who swiftly took action to expedite the matter. With her help, we successfully completed the task in time, setting us up for success in our Black Friday campaigns. We extend our gratitude to Bullzpot development team for their dedication and timely assistance.",
      name: "Wrist Watch Brand",
      link: "/",
      siteDescription: "Shopify Website",
    },
    {
      text: "Bullzpot developers were patient and communication was amazing and I would work with them again. The best part was that they work very fast and reliably. Thanks again to the Bullzpot team!",
      name: "Inthira",
      link: "/",
      siteDescription: "Business Website",
    },
    {
      text: "From initial consultation to final delivery, Bullzpot exceeded all expectations. It is rare to find such a combination of professionalism and passion.",
      name: "Anne",
      link: "/",
      siteDescription: "Fashion Website",
    },
  ];

  return (
    <div className="max-w-screen-xl w-10/12 mx-auto">
      <div className="text-center">
        <h1 className="text-[40px] color-primary font-bold">
          What Our Lovely <br /> Customers Say!
        </h1>
      </div>
      <div className="columns-1 md:columns-2 gap-5 mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg"
          >
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
