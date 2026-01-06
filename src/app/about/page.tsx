"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";
import {
  FaIndustry,
  FaChartLine,
  FaCog,
  FaRocket,
  FaAward,
  FaUsers,
} from "react-icons/fa";
export default function AboutPage() {
  const stats = [
    { number: "2022", label: "Founded", icon: FaRocket },
    {
      number: "25+ Devices",
      label: "Operational In-Fieldit",
      icon: FaIndustry,
    },
    { number: "2+ Years", label: "In-field Deplyment", icon: FaAward },
  ];
  const values = [
    {
      icon: FaChartLine,
      title: "Data-Driven",
      description:
        "We transform raw data into actionable insights that drive operational excellence.",
    },
    {
      icon: FaCog,
      title: "Innovation",
      description:
        "Cutting-edge technology solutions that keep you ahead of the competition.",
    },
    {
      icon: FaUsers,
      title: "Partnership",
      description:
        "We work closely with our clients to understand and solve their unique challenges.",
    },
  ];
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <motion.section
        className="pt-24 pb-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: "var(--color-primary)" }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-[700px] h-[700px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: "var(--color-accent)" }}
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center min-h-[400px] lg:min-h-[600px]">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full lg:w-[45%] flex justify-center"
            >
              <motion.div
                className="rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden w-full"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-20"
                  viewBox="0 0 100 100"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d="M20,50 Q30,20 50,50 T80,50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    style={{ color: "var(--color-primary)" }}
                  />
                </motion.svg>
                <motion.svg
                  className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 opacity-20"
                  viewBox="0 0 100 100"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d="M20,50 Q30,80 50,50 T80,50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    style={{ color: "var(--color-primary)" }}
                  />
                </motion.svg>
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 relative z-10 leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div style={{ color: "var(--color-text-primary)" }}>
                    We Automate
                  </div>
                  <div
                    style={{
                      background:
                        "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      wordBreak: "keep-all",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Industries
                  </div>
                </motion.h1>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 lg:space-y-8 w-full lg:w-[45%]"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-4 lg:mb-6 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                    color: "var(--color-text-inverse)",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span
                    className="w-2 h-2 rounded-full mr-2 animate-pulse"
                    style={{ backgroundColor: "var(--color-text-inverse)" }}
                  ></span>
                  About Us
                </motion.div>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 break-words"
                  style={{ color: "var(--color-primary)" }}
                >
                  About Us
                </h2>
              </motion.div>
              <motion.div
                className="rounded-3xl p-6 sm:p-8 shadow-xl"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0, 163, 255, 0.2)",
                }}
              >
                <p
                  className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 lg:mb-6 break-words"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  In the age of{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Industry 4.0
                  </span>
                  , staying ahead requires a competitive edge. Since our
                  founding in{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    2022
                  </span>
                  , We at ReFlow Technologies have been at the forefront of
                  driving digital transformation in factories.
                </p>
                <p
                  className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 lg:mb-6 break-words"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  We specialize in the automated capture, transformation, and
                  contextualization of process data, empowering businesses to
                  achieve{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    zero downtime
                  </span>
                  ,{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    zero resource wastage
                  </span>
                  , and{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    maximum efficiency
                  </span>
                  .
                </p>
                <motion.div
                  className="p-6 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-primary), var(--color-primary-hover))",
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255, 255, 255, 0.2), transparent)",
                    }}
                    animate={{ x: [-100, 400] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <p
                    className="text-xl font-bold relative z-10"
                    style={{ color: "var(--color-text-inverse)" }}
                  >
                    Our vision is a future where every factory operates at peak
                    performance, setting new standards in operational
                    excellence.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link href="/contact">
                  <motion.button
                    className="w-full lg:w-auto px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(to right, var(--color-primary), var(--color-primary-hover))",
                      color: "var(--color-text-inverse)",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 163, 255, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="rounded-3xl p-8 shadow-xl text-center"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border-subtle)",
                    border: "1px solid",
                  }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover))",
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent
                      className="text-3xl"
                      style={{ color: "var(--color-text-inverse)" }}
                    />
                  </motion.div>
                  <motion.h3
                    className="text-4xl font-black mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.3, type: "spring" }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 pb-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Core Values
              </span>
            </h2>
            <motion.div
              className="h-1.5 w-40 rounded-full mx-auto"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-accent))",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  className="rounded-3xl p-8 shadow-xl relative overflow-hidden group"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border-subtle)",
                    border: "1px solid",
                  }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), transparent)",
                      opacity: 0.1,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover))",
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent
                      className="text-2xl"
                      style={{ color: "var(--color-text-inverse)" }}
                    />
                  </motion.div>
                  <h3
                    className="text-2xl font-black mb-4 relative z-10"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="leading-relaxed relative z-10"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
