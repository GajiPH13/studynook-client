"use client";

import { motion } from "framer-motion";
import { FaBookOpen, FaUsers, FaMapMarkedAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";

const features = [
  {
    icon: FaBookOpen,
    title: "Easy Room Listings",
    desc: "List and manage study spaces with full control and simplicity.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Find Quiet Spaces",
    desc: "Discover nearby study rooms designed for focus and productivity.",
  },
  {
    icon: FaUsers,
    title: "Built for Collaboration",
    desc: "Connect students and institutions in one shared ecosystem.",
  },
];

const PreFooterCTA = () => {
  return (
    <section className="relative mt-24 px-6 py-20 bg-olive-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Everything you need to manage study spaces
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            StudyNook is a full-stack platform that helps students and library users easily discover and book study rooms. It enables users to list and manage available study spaces while helping others find quiet, productive environments for focused learning. Designed with simplicity and collaboration in mind, StudyNook makes studying more accessible anytime, anywhere.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#586235]/10 text-[#586235] mb-4">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
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
      </div>
    </section>
  );
};

export default PreFooterCTA;