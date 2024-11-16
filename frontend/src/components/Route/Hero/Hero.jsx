import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/damn7aehg/image/upload/v1731788178/polideportivo_cc6qrm.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Haz deporte con nosotros <br /> y nuestra comunidad
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Somos una empresa que vincula los deportistas para que puedan hacer deporte <br/>
        sin complicaciones, mientras hacen amigos 
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Ver servicios
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
