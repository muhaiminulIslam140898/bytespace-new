import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-page">

      {/* Logo */}
      <Link href="/" className="auth-logo">
        <span className="auth-logo-mark">b</span>
        <span>ByteSpace</span>
      </Link>


      {/* LEFT SIDE */}
      <section className="auth-left">

        <h1>Sign in with ease</h1>

        <p>
          Experience a seamless and efficient sign-in process that
          grants you instant access to a world of knowledge.
        </p>


        {/* Course visual */}
        <div className="auth-course-visual">

          <div className="auth-course-card card-one">

            <div className="fake-course-image">
              Build Digital Skills
            </div>

            <strong>The Power of Big Data</strong>

            <span>4.5 ★</span>

          </div>


          <div className="auth-course-card card-two">

            <div className="fake-course-image">
              Learn Figma
            </div>

            <strong>Learn Figma from Basic</strong>

            <span>4.5 ★</span>

          </div>


          <div className="happy-students">

            <strong>Happy Students</strong>

            <span>4.9 ★</span>

          </div>

        </div>

      </section>


      {/* LOGIN CARD */}
      <section className="auth-card">

        <span className="auth-small-title">
          Sign In
        </span>

        <h2>
          Welcome Back
        </h2>


        <form>

          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="designer@example.com"
          />


          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="••••••••"
          />


          <button type="submit">
            Sign In
          </button>

        </form>


        {/* OR */}
        <div className="auth-divider">
          <span>or</span>
        </div>


        {/* SOCIAL */}
        <div className="social-login">

          <button type="button">
            f
          </button>

          <button type="button">
            G
          </button>

        </div>


        {/* REGISTER */}
        <p className="auth-switch">

          New user?{" "}

          <Link href="/register">
            Create an account
          </Link>

        </p>

      </section>

    </main>
  );
}