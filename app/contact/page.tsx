export default function ContactPage() {
  return (
    <main>
      <h1>Contact ByteSpace</h1>

      <p>
        Have a question or need help? Get in touch with the ByteSpace team.
      </p>

      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Your email"
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
            placeholder="Write your message"
            rows={5}
          />
        </div>

        <button type="submit">
          Send Message
        </button>
      </form>
    </main>
  );
}