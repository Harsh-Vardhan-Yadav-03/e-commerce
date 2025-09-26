function Contact() {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 rounded"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
