import React from "react";
import { experienceList } from "../constants";
import styles from "../style";

const Experience = () => {
  return (
    <section id="experience" className={`${styles.paddingY} ${styles.paddingX}`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-2">
            <h2 className={`${styles.heading2}`}>Experience</h2>
            <p className={`${styles.paragraph} max-w-3xl`}>
              My professional journey and internship experiences
            </p>
          </div>

          <div className="relative">
            {/* Timeline Container */}
            <div className="flex gap-0 md:gap-8 flex-col md:flex-row">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 transform md:-translate-x-1/2"></div>

              {/* Experience Items */}
              <div className="flex flex-col gap-8 w-full md:w-1/2">
                {experienceList.map((experience, index) => (
                  <div key={experience.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 top-8">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
                    </div>

                    {/* Card */}
                    <div className={`ml-24 md:ml-0 p-6 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      <div className="flex items-start gap-4 mb-4">
                        {experience.icon && (
                          <img
                            src={experience.icon}
                            alt={experience.title}
                            className="w-16 h-16 rounded-lg object-cover bg-gray-700"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-sm font-semibold text-blue-400">
                            {experience.position}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {experience.duration}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {experience.content1 && (
                          <div className="flex gap-2">
                            <span className="text-blue-400 mt-0.5">•</span>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {experience.content1}
                            </p>
                          </div>
                        )}
                        {experience.content2 && (
                          <div className="flex gap-2">
                            <span className="text-blue-400 mt-0.5">•</span>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {experience.content2}
                            </p>
                          </div>
                        )}
                        {experience.content3 && (
                          <div className="flex gap-2">
                            <span className="text-blue-400 mt-0.5">•</span>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {experience.content3}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
