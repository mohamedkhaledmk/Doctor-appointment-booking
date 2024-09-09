import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 max-w-screen-md mx-auto">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="text_para text-center mb-8 ">
          Got a technical issue ? Want to send feedback about a beta feature?
          Let us know
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="text-textColor font-semibold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="focus:outline-none w-full px-4 py-3 border border-solid border-gray-300 rounded-lg
              focus:border-primaryColor placeholder:text-textColor"
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-textColor font-semibold">
              Subject
            </label>
            <input
              type="subject"
              id="subject"
              placeholder="Let us know how we can help you"
              className="focus:outline-none w-full px-4 py-3 border border-solid border-gray-300 rounded-lg
              focus:border-primaryColor placeholder:text-textColor"
            />
          </div>
          <div>
            <label htmlFor="comment" className="text-textColor font-semibold">
              Your Message
            </label>
            <textarea
              rows={6}
              type="comment"
              id="comment"
              placeholder="Leave a comment"
              className="focus:outline-none w-full px-4 py-3 border border-solid border-gray-300 rounded-lg
              focus:border-primaryColor placeholder:text-textColor"
            />
          </div>
          <button className="rounded-md btn w-full hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
