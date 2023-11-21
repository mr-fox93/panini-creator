import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";

type CircleVariant = {
  style: any;
  animation:
    | typeof fadeLeft
    | typeof fadeRight
    | typeof fadeUp
    | typeof fadeDown;
};

const fadeOut = {
  exit: { opacity: 0, transition: { duration: 1 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -150, transition: { duration: 1 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 150, transition: { duration: 1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -150, transition: { duration: 1 } },
};
const fadeDown = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 150, transition: { duration: 1 } },
};

const StartAnimationScreen = () => {
  // const { reset } = useFormContext();

  const [startAnimation, setStartAnimation] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setStartAnimation(false);
    // reset();
    navigate("/home");
    window.location.reload();

    // setTimeout(() => {
    //   navigate("/home");
    // }, 1300);
  };

  const circleCommonStyle = {
    position: "absolute",
    borderRadius: "50%",
    border: "1px solid black",
    width: "1070px",
    height: "1070px",
  };

  const circleVariants: CircleVariant[] = [
    { style: { ...circleCommonStyle, right: "500px" }, animation: fadeLeft },
    { style: { ...circleCommonStyle, left: "500px" }, animation: fadeRight },
    { style: { ...circleCommonStyle, right: "1050px" }, animation: fadeLeft },
    { style: { ...circleCommonStyle, left: "1050px" }, animation: fadeRight },
    {
      style: {
        ...circleCommonStyle,
        width: "535px",
        left: "200px",
        borderRadius: "535px 0 0 535px",
        borderRight: "none",
      },
      animation: fadeLeft,
    },
    {
      style: {
        ...circleCommonStyle,
        width: "535px",
        right: "200px",
        borderRadius: "0 535px 535px 0",
        borderLeft: "none",
      },
      animation: fadeRight,
    },
    {
      style: {
        ...circleCommonStyle,
        width: "632px",
        height: "632px",
        top: "-300px",
      },
      animation: fadeUp,
    },
    {
      style: {
        ...circleCommonStyle,
        width: "632px",
        height: "632px",
        bottom: "-300px",
      },
      animation: fadeDown,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatePresence>
        {startAnimation &&
          circleVariants.map((item, index) => (
            <motion.div
              key={index}
              style={item.style}
              initial="hidden"
              animate={startAnimation ? "visible" : "exit"}
              variants={item.animation}
              transition={{ duration: 1 }}
              exit="exit"
            />
          ))}

        <motion.div
          initial="hidden"
          animate={startAnimation ? "visible" : "exit"}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={fadeOut}
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 0",
            borderTop: "1px solid rgba(0, 0, 0, 1)",
            borderBottom: "1px solid rgba(0, 0, 0, 1)",
            color: "#000",
            fontFamily: "Instrument Serif",
            fontSize: "46px",
            zIndex: 999,
          }}
        >
          <span>Panini Creator</span>
          <motion.button
            whileHover={{ scale: 1.05, border: "1px solid black" }}
            onClick={() => handleButtonClick()}
            style={{
              padding: "14px 20px",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Oxygen Mono",
              fontSize: "12px",
              fontWeight: "400",
              border: "1px solid transparent",
              background: "none",
              cursor: "pointer",
              marginTop: "20px",
              zIndex: 998,
              transition: "border 1s ease",
            }}
          >
            START AGAIN
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StartAnimationScreen;
