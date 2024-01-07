export default function ContactUs() {
  return (
    <div>
      <div className="md:py-8 md:px-4 mx-auto md:max-w-screen-md">
        <p className=" my-5 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          We love hearing from our customers! Something wrong? Giving us
          feedback?
          <p>
            Email us at info@kindaproblematic@gmail.com. We strive to respond to
            all email inquires within 1-2 business days.
          </p>
        </p>
        <form
          action="mailto:spencerlee96@gmail.com"
          method="post"
          className="space-y-4 flex flex-col items-center "
        >
          <div className="w-full">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your Name
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:border-gray-600 placeholder-gray-500  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Jane Doe"
              required
            ></input>
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white dark:border-gray-600 placeholder-gray-500  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="example@email.com"
              required
            ></input>
          </div>
          <div className="w-full">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-black"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:border-gray-600 placeholder-gray-500  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            ></input>
          </div>
          <div className="sm:col-span-2 w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 rounded-md shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-8 text-sm font-medium text-center text-white rounded-md bg-black sm:w-fit hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}
