"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];

  const courses = [
  {
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
    title: "Build Digital Asset",
    category: "Graphic Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    title: "the Power of Big Data",
    category: "Data Science",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    title: "Balancing Productivity and Life",
    category: "Productivity",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    title: "Mastering Money Management",
    category: "Business",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    title: "From Idea to Startup Success",
    category: "Freelance & Entrepreneurship",
  },
];

  return (
    <main>
      {/* ================= HERO ================= */}

      <section id="home" className="hero">
        <header className="navbar">
          <Link href="/" className="logo">
            <span className="logo-mark">b</span>
            <span>ByteSpace</span>
          </Link>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#creators">Creators</a>
          </nav>

          <div className="nav-actions">
            <a href="/login">Sign In</a>
            <a href="/register">Join Us</a>
            <button className="cart-button">♧</button>
          </div>
        </header>

        <div className="hero-content">
          <h1>
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p>
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button>Search</button>
          </div>
        </div>

        <div className="hero-decoration decoration-left">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="hero-decoration decoration-right">
          <span />
          <span />
          <span />
        </div>

        <div className="hero-circle" />

        <img
          src="/images/hero-student.png"
          alt="Student learning online"
          className="hero-student"
        />

        <div className="progress-card">
          <span>Learning Progress</span>
          <strong>55%</strong>

          <div className="progress-bar">
            <div />
          </div>
        </div>

        <div className="course-card">
          <strong>UI/UX Design</strong>
          <span>200+ Courses</span>
          <span>1000+ Students</span>
        </div>

        <div className="students-card">
          <strong>Happy Students</strong>

          <div className="student-avatars">
            <span />
            <span />
            <span />
            <span />
          </div>

          <b>20k+</b>
        </div>
      </section>

      {/* ================= LOGO STRIP ================= */}

      <section className="logo-strip">
        <span>◉ Logipsum</span>
        <span>✺ Logipsum</span>
        <span>◉ Logipsum</span>
        <span>✣ Logipsum</span>
        <span>◉ Logipsum</span>
      </section>

      {/* ================= DISCOVER SECTION ================= */}

      <section id="courses" className="discover-section">
        <div className="section-heading">
          <h2>
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p>
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Categories */}

        <div className="categories">
          {categories
            .slice(0, showAllCategories ? categories.length : 8)
            .map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "category active"
                    : "category"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}

          <button
            className="category more-category"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? "− Less" : "+ More"}
          </button>
        </div>

        {/* Course Cards */}

        <div className="courses-grid">
          {courses
            .filter((course) => {
              const matchesSearch = course.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

              const matchesCategory =
                selectedCategory === "Featured" ||
                course.category === selectedCategory;

              return matchesSearch && matchesCategory;
            })
            .map((course, index) => (
            <article className="course-item" key={course.title}>
              <div className="course-image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />

                <div className="course-image-info">
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                  <span>59 Comments</span>
                </div>
              </div>

              <div className="course-title-row">
                <h3>{course.title}</h3>
                <span className="rating">4.5 ★</span>
              </div>

              <p className="creator">
                by <span>purepixel studio</span>
              </p>

              <div className="course-bottom">
                <span className="beginner">▥ Beginner</span>

                <div className="mini-avatars">
                  <span />
                  <span />
                  <span />
                  <span />
                  <b>26+</b>
                </div>
              </div>

              <div className="course-price">
                <strong>$25</strong>
                <span>/lifetime</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= LEARNING PATH SECTION ================= */}

      <section id="categories" className="learning-path-section">
        <div className="section-heading">
          <h2>Explore Diverse Learning Paths at Bytespace</h2>

          <p>
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* Category Cards */}

        <div className="learning-categories">
          <div className="learning-category">
            <div className="category-icon">🛠</div>
            <span>Design</span>
          </div>

          <div className="learning-category">
            <div className="category-icon">◇</div>
            <span>Development</span>
          </div>

          <div className="learning-category">
            <div className="category-icon">▱</div>
            <span>IT &amp; Software</span>
          </div>

          <div className="learning-category">
            <div className="category-icon">▦</div>
            <span>Business</span>
          </div>

          <div className="learning-category">
            <div className="category-icon">♨</div>
            <span>Marketing</span>
          </div>

          <div className="learning-category">
            <div className="category-icon">▣</div>
            <span>Photography</span>
          </div>
        </div>

        {/* Professional Growth */}

        <div className="growth-section">
          <div className="growth-top">
            <div className="growth-copy">
              <h2>
                Your Path to Professional
                <br />
                Growth Starts Here!
              </h2>

              <p>
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey.
                Whether you are looking to sharpen specific skills, gain
                industry expertise, or embark on a new career path entirely,
                we have the resources you need.
              </p>

              <div className="growth-stats">
                <div>
                  <strong>12K</strong>
                  <span>Students</span>
                </div>

                <div>
                  <strong>70+</strong>
                  <span>Courses</span>
                </div>

                <div>
                  <strong>16</strong>
                  <span>Creators</span>
                </div>
              </div>
            </div>

            <div className="growth-visual">
              <div className="growth-course-card">
                <strong>Learn Figma from Basic</strong>
                <span>by purepixel studio</span>
                <b>$25</b>
              </div>

              <div className="growth-progress-card">
                <span>Learning Progress</span>
                <strong>55%</strong>

                <div className="growth-progress-bar">
                  <div />
                </div>
              </div>

              <img
                src="/images/hero-student.png"
                alt="Student learning"
              />
            </div>
          </div>

            {/* Creator Section */}

            <div id="creators" className="creator-growth">
            <div className="creator-visual">
              <div className="revenue-card">
                <span>Total Revenue</span>
                <strong>$120.29</strong>
                <div />
              </div>

              <div className="revenue-card second">
                <span>Year to Date</span>
                <strong>$1,200.38</strong>
                <div />
              </div>

              <img
                src="/images/hero-student.png"
                alt="Course creator"
              />
            </div>

            <div className="creator-copy">
              <h2>
                Create &amp; Manage
                <br />
                Courses Easily.
              </h2>

              <p>
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>

              <ul>
                <li>Share Your Expertise</li>
                <li>Monetize Your Passion</li>
                <li>Flexibility and Autonomy</li>
                <li>Build a Community</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= CTA SECTION ================= */}

        <section className="creator-cta">
          <div className="creator-cta-content">
            <h2>
              Unlock Your Potential as a
              <br />
              Creator with ByteSpace
            </h2>

            <p>
              Experience the collaboration of numerous creators and an
              expanding selection of courses. Register now and become a part
              of a community comprising over 10,000 local and international
              creators.
            </p>

            <button className="creator-cta-button">
              Join as Creator
            </button>
          </div>

          <div className="creator-cta-decoration creator-cta-left">
            <span />
            <span />
            <span />
          </div>

          <div className="creator-cta-decoration creator-cta-right">
            <span />
            <span />
            <span />
          </div>
        </section>
      </section>

        {/* ================= TESTIMONIALS ================= */}

        <section className="testimonials-section">
          <div className="testimonials-heading">
            <div>
              <h2>
                Discover What Our
                <br />
                Community Is Saying
              </h2>
            </div>

            <p>
              At ByteSpace, our vibrant community of learners and creators is
              at the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating
              on our platform.
            </p>
          </div>

          <div className="testimonials-grid">
            <article className="testimonial-card">
              <div className="testimonial-profile">
                <div className="testimonial-avatar">S</div>

                <div>
                  <strong>Sarah M.</strong>
                  <span>Enthusiastic Learner</span>
                </div>
              </div>

              <p>
                "ByteSpace has transformed my approach to learning. The
                diverse range of courses and the quality of content provided
                by creators have exceeded my expectations."
              </p>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-profile">
                <div className="testimonial-avatar">J</div>

                <div>
                  <strong>James L.</strong>
                  <span>Lifelong Learner</span>
                </div>
              </div>

              <p>
                "I've tried several online learning platforms, and ByteSpace
                stands out for its vibrant community and the variety of
                courses available."
              </p>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-profile">
                <div className="testimonial-avatar">A</div>

                <div>
                  <strong>Alex B.</strong>
                  <span>Inspired Creator</span>
                </div>
              </div>

              <p>
                "As a creator, ByteSpace has been a game-changer for me. The
                course editor is user-friendly, and the support from the
                community is incredible."
              </p>
            </article>
          </div>
        </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="footer-main">
          {/* Newsletter */}

          <div className="footer-newsletter">
            <div className="footer-logo">
              <span className="footer-logo-mark">b</span>
              <span>ByteSpace</span>
            </div>

            <p>
              Stay Up to Date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="footer-subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
              />

              <button
                onClick={() => {
                  if (email.trim() && email.includes("@")) {
                    setSubscribed(true);
                    setEmail("");
                  }
                }}
              >
                Subscribe
              </button>
            </div>

            {subscribed && (
              <small className="subscribe-success">
                Thanks for subscribing! 🎉
              </small>
            )}

            <small>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </small>
          </div>

          {/* Footer Links */}

          <div className="footer-links">
            <div className="footer-column">
              <a href="#courses">Featured Courses</a>
              <a href="#categories">Featured Categories</a>
              <a
              href="#courses"
              onClick={() => setSelectedCategory("Business")}
            >
              Business
            </a>
              <a
                href="#courses"
                onClick={() => setSelectedCategory("IT")}
              >
                IT
              </a>
              <a
              href="#courses"
              onClick={() => setSelectedCategory("Design")}
            >
              Design
            </a>
            </div>

            <div className="footer-column">
              <a
                href="#courses"
                onClick={() => setSelectedCategory("Development")}
              >
                Development
              </a>
              <a
                href="#courses"
                onClick={() => setSelectedCategory("Marketing")}
              >
                Marketing
              </a>
              <a
                href="#courses"
                onClick={() => setSelectedCategory("Photography")}
              >
                Photography
              </a>
              <a
                href="#courses"
                onClick={() => setSelectedCategory("Finance")}
              >
                Finance
              </a>
              <a
                href="#courses"
                onClick={() => setSelectedCategory("Sport")}
              >
                Sport
              </a>
            </div>

            <div className="footer-column">
              <a href="#creators">Become a Creator</a>
              <a href="#">Affiliate Program</a>
              <a href="/contact">Contact</a>
              <a href="/help">Help</a>
              <a href="/about">About</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}

        <div className="footer-bottom">
          <span>© 2023 ByteSpace. All rights reserved.</span>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </main>
  );
}