import React from "react";
import styles from "../style";
import { hobbies } from "../constants";
import { motion } from "framer-motion";

const HobbyCard = (props) => {
  const IconComponent = props.icon;
  
  return (
    <motion.div
      className="flex flex-col px-8 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
          <IconComponent className="text-white text-2xl" />
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
            {props.title}
          </h4>
        </div>
      </div>

      {props.image && (
        <div className="mb-4">
          <img 
            src={props.image} 
            alt={props.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}

      <p className="font-poppins font-normal text-[16px] text-white mb-4 leading-[24px]">
        {props.description}
      </p>

      <div>
        {props.details.map((detail, index) => (
          <p key={index} className="font-poppins font-normal text-[14px] text-dimWhite my-2 leading-[24px]">
            ● {detail}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Hobbies = () => {
  return (
    <section id="hobbies">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Hobbies
      </h1>

      <div className={`${styles.flexCenter} flex-col relative mb-4 mt-8`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:mt-16">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.id} index={hobby.id} {...hobby} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies; 