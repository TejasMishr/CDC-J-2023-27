import { motion } from "framer-motion";
import { useGradientUpdater } from "../../hooks/useGradientUpdater";
// import Lottie from "../../common/Lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const UPLIFT_DELIVERY_DATA = [
  {
    id: "uplift_1",
    icon: "aim.png",
    title: "Aim",
    description:
      "Achieve over $70,000 in testing cost savings, automate QA roles within agile squads, and enhance communication among BAs, Developers, and Product Owners for streamlined operations and improved collaboration.",
  },
  {
    id: "uplift_2",
    icon: "mission.png",
    title: "Mission",
    description:
      "Streamline documentation across JIRA, Confluence, and git repositories, gain instant product insights, and maintain testing traceability with our comprehensive test script dashboard.",
  },
  {
    id: "uplift_3",
    icon: "mission.png",
    title: "Vision",
    description:
      "ReqOPS requirement briefs are detailed to ensure your engineers enjoy working with us. We provide comprehensive user stories, functional UI test cases, CI integration, automated process flow generation, AI workshops, and more.",
  },
];

const HomeAbout = () => {
  const gradientRefs = useGradientUpdater();

  return (
    <section className="px-4 lg:py-[65px] py-10 h-auto overflow-hidden mx-auto z-20 ">
      <div className="max-w-[1200px] mx-auto ">
        <div
          className="
         flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative z-20 mt-[20px] px-4 h-auto
      "
        >
          <h1 className="text-white font-bold xl:text-[54px] lg:text-5xl text-4xl leading-[1.25] h-auto mx-auto">
            About Us
          </h1>
        </div>

        <motion.div
          className="rounded-3xl p-4 mt-10 bg-transparent shadow-lg border-[1px] border-gray-700 relative overflow-hidden"
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
          }}
        >
          <div
            className="absolute top-0 right-0 w-full h-full blur-3xl bg-transparent"
            style={{
              background:
                "radial-gradient(at right top, rgba(110, 120, 143, 1.0), rgba(3, 3, 3, 1.0))",
            }}
          />
          <div className="flex items-center cursor-pointer mb-4 bg-transparent p-6 rounded-lg shadow-lg transition-transform transform hover:bg-secondary hover:scale-105 gap-2">
            {/* Text Section */}
            <div className="bg-[rgba(66,93,114,0.2)] rounded-xl p-6 h-[300px] md:h-[350px] w-full md:w-1/2 z-10">
              <h4 className="text-white font-montserrat font-light tracking-wide leading-relaxed text-lg md:text-xl lg:text-2xl text-center md:text-left animate-fadeIn">
                The Coders & Developers Club MMMUT fosters a strong coding
                culture by empowering students with continuous learning, tech
                awareness, and active contest involvement. Collaborating with
                faculty and alumni, we equip members with industry-relevant
                skills, inspiring innovation, teamwork, and technical
                excellence.
              </h4>
            </div>

            {/* Animation Section */}
            <div className="rounded-xl h-[300px] md:h-[450px] w-full md:w-1/2 flex justify-center items-center relative">
              <div
                className="absolute top-0 right-0 w-full h-full blur-3xl bg-transparent"
                style={{
                  background:
                    "radial-gradient(circle, rgba(109,134,152,1) 7%, rgba(42,58,78,1) 75%)",
                }}
              />
              <DotLottieReact
                src="https://lottie.host/7b89e438-7a6a-49e4-9be4-9f52a72acf44/SdAQzMa8HI.lottie"
                loop
                autoplay
                className="w-[80%] md:w-full h-[200px] md:h-full relative z-10 animate-pulse"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className="shadow-[0_3px_5px_rgba(0,0,0,0.3)] absolute top-0 bg-[rgba(35,30,43,1)] w-full h-[200px] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(35,30,43,1) 7%, rgba(109,134,152,1) 75%, rgba(42,58,78,1) 92%)",
        }}
      />

      <section className="lg:py-[65px] py-10 px-4 mx-auto">
        <div className="max-w-[1200px] mx-auto  ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 s:grid-cols-2  xxl:gap-10 xl:gap-18 lg:gap-18 gap-28 lg:mt-5 md:mt-3 mt-4 ">
            {UPLIFT_DELIVERY_DATA?.map(
              ({ id, title, icon, description }, index) => {
                return (
                  <motion.div
                    key={id}
                    className="bg-grad-theme-135 rounded-2xl p-[3px] md:min-h-[215px] xxs:min-h-[215px] min-h-auto mb-2"
                    ref={(el) => (gradientRefs.current[index] = el)}
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <div className="rounded-2xl bg-jet flex flex-col items-center h-full lg:p-4 md:p-2 p-2 pt-0 relative ">
                      <img
                        className=" absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 "
                        src={icon}
                        alt=""
                      />
                      <h4 className="lg:text-2xl md:text-xl font-extrabold text-base text-center text-blue-100 font-montserrat  mt-7 mb-3">
                        {title}
                      </h4>
                      <p className="lg:text-base text-sm font-source-sans text-white text-center p-4 lg:mx-4">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* </div> */}
    </section>
  );
};

export default HomeAbout;
