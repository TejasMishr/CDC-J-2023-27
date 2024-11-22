import React, { useRef } from "react";

export default function Lottie({ link, wid, hig }) {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    // <div className={styles.container}>
    //   <main className={styles.main}>
    <lottie-player
      id="firstLottie"
      ref={ref}
      autoplay
      // controls
      loop
      mode="normal"
      src={link}
      style={{ width: wid, height: hig }}
    ></lottie-player>
    //   </main>
    // </div>
  );
}
