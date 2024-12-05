const Contact = () => {
  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-900 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-900 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-gray-900 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
