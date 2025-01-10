import { Form } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

// eslint-disable-next-line react-refresh/only-export-components
export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false, error: error.message };
  }
};
const Contact = () => {
  const theme = useTheme()

  const handleTextTheme = () => {
    return theme.theme === 'dark' ? 'text-gray-100 ' : 'text-black'
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center py-12 ${theme.theme === 'dark' ? 'text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gray-200 text-black'}`}>
      <div className="text-center mb-12">
        <h1 className={`text-5xl font-extrabold ${handleTextTheme}`}>Contact Us</h1>
        <p className={`mt-4 ${handleTextTheme}`}>Wed love to hear from you! Whether you have a question, feedback, or just want to say hi, drop us a message below.</p>
      </div>
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 lg:p-16 max-w-lg w-full transform transition duration-500 hover:scale-105">
        <Form method="POST" action="/contact">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="shadow-md appearance-none border border-gray-300 rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="shadow-md appearance-none border border-gray-300 rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow-md appearance-none border border-gray-300 rounded-2xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
              rows="5"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition duration-300 hover:scale-105"
            >
              Send
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
