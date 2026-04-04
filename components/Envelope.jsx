"use client";
import { useState } from "react";

export default function Envelope({ onClick, className = "" }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((value) => !value);
    onClick?.();
  };

  return (
    <div className={className} style={styles.wrapper}>
      <div
        style={styles.envelope}
        onClick={handleClick}
      >
        <div
          style={{
            ...styles.topFlap,
            transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
          }}
        />
        <div style={styles.bottomFlap} />
        <div style={styles.leftFold} />
        <div style={styles.rightFold} />
        <div style={styles.shine} />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  envelope: {
    position: "relative",
    width: "121px",
    height: "80px",
    borderRadius: "12px",
    background: "linear-gradient(180deg, #fbf8fd 0%, #efe5f8 62%, #e4d2f3 100%)",
    border: "1px solid rgba(255,255,255,0.72)",
    boxShadow: "0 14px 26px rgba(194,178,224,0.28)",
    overflow: "hidden",
    cursor: "pointer",
    perspective: "800px",
  },

  topFlap: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "44px",
    background: "linear-gradient(180deg, #ffffff 0%, #ece2f8 100%)",
    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
    transformOrigin: "top",
    transition: "0.6s ease",
    borderBottom: "1px solid rgba(214,197,233,0.44)",
  },

  bottomFlap: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "38px",
    background: "linear-gradient(180deg, rgba(240,230,249,0.32) 0%, rgba(228,214,243,0.78) 100%)",
    clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
  },

  leftFold: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "50%",
    height: "38px",
    background: "linear-gradient(180deg, rgba(239,229,248,0.24) 0%, rgba(226,211,242,0.72) 100%)",
    clipPath: "polygon(0 100%, 100% 14%, 100% 100%)",
  },

  rightFold: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "50%",
    height: "38px",
    background: "linear-gradient(180deg, rgba(239,229,248,0.24) 0%, rgba(226,211,242,0.72) 100%)",
    clipPath: "polygon(0 14%, 100% 100%, 0 100%)",
  },

  shine: {
    position: "absolute",
    top: "18%",
    left: "50%",
    width: "72px",
    height: "1px",
    background: "rgba(255,255,255,0.34)",
    transform: "translateX(-50%)",
  },
};
