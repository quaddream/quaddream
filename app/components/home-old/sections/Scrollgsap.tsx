"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Commitment from "./Commitment";

gsap.registerPlugin(ScrollTrigger);

import { Home } from "../type";

const Scrollgsap = ({ data }: { data: Home["firstSection"] }) => {
  const commitmentRef = useRef(null);

  useEffect(() => {
    if (commitmentRef.current) {
      ScrollTrigger.matchMedia({
        "(max-width: 767px)": () => {
          gsap.fromTo(
            commitmentRef.current,
            { borderTopLeftRadius: "0px", borderTopRightRadius: "0px" },
            {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: commitmentRef.current,
                start: "top bottom",
                end: "top -100px",
                scrub: true,
              },
            }
          );
        },

        "(min-width: 768px)": () => {
          gsap.fromTo(
            commitmentRef.current,
            { borderTopLeftRadius: "120px", borderTopRightRadius: "120px" },
            {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: commitmentRef.current,
                start: "top bottom",
                end: "top -100px",
                scrub: true,
              },
            }
          );
        },
      });
    }
  }, []);

  return (
    <div ref={commitmentRef} className="relative z-20 bg-white overflow-hidden">
      <Commitment data={data} />
    </div>
  );
};

export default Scrollgsap;
