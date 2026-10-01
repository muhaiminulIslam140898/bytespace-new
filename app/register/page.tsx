"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="auth-page">
      {/* Logo */}
      <div className="auth-logo">
        <span className="auth-logo-mark">b</span>
        <span>ByteSpace</span>
      </div>

      {/* Left Content */}
      <div className="auth-left">
        <h1>Sign up and come in</h1>

        <p>
          The registration process is straightforward, uncomplicated,
          and efficient, allowing users to sign up quickly, easily,
          and at no cost.
        </p>

        <div className="auth-course-preview">
          <div className="auth-course-card card-one">
            <div className="auth-course-image">
              Build Digital Skills
            </div>

            <strong>Build Digital Skills</strong>
            <span>4.5 ★</span>
          </div>

          <div className="auth-course-card card-two">
            <div className="auth-course-image">
              Learn Figma
            </div>

            <strong>Learn Figma from Basic</strong>
            <span>4.5 ★</span>
          </div>

          <div className="auth-students">
            <strong>Happy Students</strong>
            <span>4.9 ★</span>
          </div>
        </div>
      </div>

      {/* Register Card */}
      <div className="auth-card">
        <span className="auth-card-label">Create an Account</span>

        <h2>Welcome to<br />ByteSpace</h2>

        <form>
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            type="text"
            placeholder="Jamie Davis"
          />

          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            placeholder="designer@example.com"
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="••••••••"
          />

          <button type="submit">
            Continue
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link href="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}