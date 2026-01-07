"use client";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        color: "var(--color-text-primary)",
        background:
          "linear-gradient(180deg, var(--color-background) 0%, var(--color-surface-muted) 50%, var(--color-surface-hover) 100%)",
      }}
    >
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/3"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="transition-all duration-300 hover:scale-105">
                <Image
                  src="/translogo.png"
                  alt="ReFlow Logo"
                  width={180}
                  height={60}
                  className="h-16 w-auto drop-shadow-sm"
                />
              </div>
            </div>
            <p
              className="leading-relaxed text-base font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Increasing Manufacturing Performance of Pharma Industries using AI
              Devices
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-text-inverse)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-surface)";
                  e.currentTarget.style.borderColor =
                    "var(--color-border-subtle)";
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                title="Follow us on Twitter"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/reflowtechnologies/"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-text-inverse)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-surface)";
                  e.currentTarget.style.borderColor =
                    "var(--color-border-subtle)";
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                title="Connect on LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/reflowtech/"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-text-inverse)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-surface)";
                  e.currentTarget.style.borderColor =
                    "var(--color-border-subtle)";
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                title="Follow us on Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4
              className="text-xl font-bold mb-6 flex items-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/about"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Support Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-xl font-bold mb-6 flex items-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              Products
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#our-product"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Alpha X Series
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-xl font-bold mb-6 flex items-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              Platform
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/login"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Reflow Console
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div
              className="text-sm font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              Copyright © {currentYear} ReFlow Technologies Pvt Ltd. All Rights
              Reserved.
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                Made with ❤️ by ReFlow Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
