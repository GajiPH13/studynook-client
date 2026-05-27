"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers, FaBookOpen, FaMapMarkedAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

const stats = [
  {
    icon: FaUsers,
    value: "10K+",
    label: "Active Students",
  },
  {
    icon: FaBookOpen,
    value: "5K+",
    label: "Rooms Listed",
  },
  {
    icon: FaMapMarkedAlt,
    value: "200+",
    label: "Institutions",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const StatsSection = () => {
  return (
    <section className="relative  py-24 px-6 bg-olive-100 dark:bg-black/20 overflow-hidden">

      {/* Soft gradient glow (matching your theme) */}
      <div className="absolute inset-0 -z-10 opacity-40 bg-gradient-to-tr from-[#586235]/10 via-transparent to-[#738046]/10 blur-2xl" />

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Trusted by Students Everywhere
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
        >
          StudyNook connects thousands of students with quiet, productive study environments across universities and libraries.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {stats.map((s) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.label}
                variants={item}
                whileHover={{ y: -6 }}
                className="relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 text-[#586235]">
                  <Icon size={26} />
                </div>

                {/* Value */}
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {s.value}
                </h3>

                {/* Label */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
       <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/rooms"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#586235] to-[#738046] text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explore Rooms
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
    </section>
  );
};

export default StatsSection;