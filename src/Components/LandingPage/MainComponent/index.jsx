import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.css";
import iphone from "../../../assets/Images/phone1.png";
import iphone2 from "../../../assets/Images/phone2.png";
import imgGradient from "../../../assets/Images/Amin.png";
import Button from "../../Common/Button";

const MainComponent = () => {
  const navigate = useNavigate();
  const [phoneToggle, setPhoneToggle] = useState(true);

// ! Phonr toggle animation
  useEffect(()=>{
    let interval = setInterval(() => {
      setPhoneToggle(phoneToggle => !phoneToggle)
    }, 3000);
    return(()=>{
      clearInterval(interval);
    })
  }, [])
  
  return (
    <section className="hero__section flex-div">
      <header className="hero__desc">
        <motion.h1
          className="hero__heading track"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="hero__heading real_time"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Real Time.
        </motion.h1>
        <motion.p 
          className="hero__text"
          initial={{opacity: 0 , y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.6}}
        >
          Track crypto currencies through a public API in real time. Visit the
          Dashboard now to do so.
        </motion.p>
        <motion.div 
          className="btns flex-div"
          initial={{opacity: 0 , x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.5, delay: 1}} 
          >
          <Button text={"Dashboard"} onClick={()=>navigate("/dashboard")}/>
          <Button text={"share"} outlined />
        </motion.div>
      </header>
      <figure className="hero__img_div">
        <motion.img
          src={phoneToggle ? iphone : iphone2}
          alt="iphone"
          className="iphone-img"
          initial={{x: "-55%", y: "-57%"}}
          animate={{x: "-55%", y: "-51%"}}
          transition={{
            type: "smooth",
            repeatTpye: "mirror",
            duration: 2.5,
            repeat: Infinity,
          }}
        />
        <img src={imgGradient} alt="gradient" className="gradient-img" />
      </figure>
    </section>
  );
};

export default MainComponent;
