export default function HelpPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "80px 40px",
        background: "#ffffff",
        color: "#111827",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          How Can We Help?
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#6b7280",
            maxWidth: "650px",
          }}
        >
          Find answers to common questions about ByteSpace courses,
          accounts, payments, creators, and learning.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              padding: "30px",
              borderRadius: "16px",
              background: "#f7f7f7",
            }}
          >
            <h2>Courses</h2>
            <p>Learn about courses, lessons, categories, and enrollment.</p>
          </div>

          <div
            style={{
              padding: "30px",
              borderRadius: "16px",
              background: "#f7f7f7",
            }}
          >
            <h2>Account</h2>
            <p>Get help with your account, profile, and login.</p>
          </div>

          <div
            style={{
              padding: "30px",
              borderRadius: "16px",
              background: "#f7f7f7",
            }}
          >
            <h2>Payments</h2>
            <p>Find information about purchases, payments, and refunds.</p>
          </div>

          <div
            style={{
              padding: "30px",
              borderRadius: "16px",
              background: "#f7f7f7",
            }}
          >
            <h2>Creators</h2>
            <p>Learn how to create and manage courses on ByteSpace.</p>
          </div>
        </div>

        <div style={{ marginTop: "50px" }}>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              borderRadius: "25px",
              background: "#caff00",
              color: "#111827",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}