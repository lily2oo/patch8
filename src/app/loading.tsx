"use client";
import { css } from "../../styled-system/css";
import Image from "next/image";
import React, { useLayoutEffect, useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Loading() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const eyeOpenRef = useRef<HTMLImageElement | null>(null);
  const eyeCloseRef = useRef<HTMLImageElement | null>(null);
  const leftTextRef = useRef<HTMLHeadElement | null>(null);
  const rightTextRef = useRef<HTMLHeadElement | null>(null);
  const didEffect = useRef(false);
  useLayoutEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;
    gsap.set(wrapperRef, {
      background: "red",
    });
    gsap.set(eyeOpenRef.current, {
      autoAlpha: 1,
    });
    gsap.set(eyeCloseRef.current, {
      autoAlpha: 0,
      display: "block",
    });
    gsap.set(rightTextRef.current, {
        autoAlpha: 0,
        display: "inline",
      });
      gsap.set(leftTextRef.current, {
        autoAlpha: 0,
        display: "inline",
      });

    const blinkTL = gsap.timeline({ repeat: 0, repeatDelay: 0 });

    blinkTL
      .to(eyeOpenRef.current, {
        autoAlpha: 0,
        duration: 0.1,
        delay: 1,
        ease: "steps(1)",
      })
      .to(eyeCloseRef.current, {
        autoAlpha: 0.8,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(eyeCloseRef.current, {
        autoAlpha: 0,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 1,
        duration: 0.1,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 0,
        duration: 0.1,
        ease: "steps(1)",
      })
      .to(eyeCloseRef.current, {
        autoAlpha: 0.8,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(eyeCloseRef.current, {
        autoAlpha: 0,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 1,
        duration: 0.1,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 0,
        duration: 0.1,
        delay: 1,
        ease: "steps(1)",
      })
      .to(eyeCloseRef.current, {
        autoAlpha: 0.8,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(eyeCloseRef.current, {
        autoAlpha: 0,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 1,
        duration: 0.1,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 0,
        duration: 0.1,
        ease: "steps(1)",
      })
      .to(eyeCloseRef.current, {
        autoAlpha: 0.8,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(eyeCloseRef.current, {
        autoAlpha: 0,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 1,
        duration: 0.1,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 0,
        duration: 0.1,
        delay: 1,
        ease: "steps(1)",
      })
      .to(leftTextRef.current, {
        autoAlpha: 1,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 1,
        duration: 0.1,
        ease: "steps(1)",
      })
      .to(eyeOpenRef.current, {
        autoAlpha: 0,
        duration: 0.1,
        ease: "steps(1)",
      })
      .to(rightTextRef.current, {
        autoAlpha: 1,
        duration: 0.02,
        ease: "steps(1)",
      })
      .to(wrapperRef.current,{
        autoAlpha:0,
        duration:0.3,
        delay:1,
      });

    blinkTL.play();
  });
  return (
    <div
      ref={wrapperRef}
      className={css({
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        bg: "#FCFFDE",
        zIndex: 100,
      })}
    >
      <Image
        ref={eyeOpenRef}
        src="/eyeOpen.svg"
        alt="x icon"
        width={100}
        height={100}
        className={css({
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        })}
      />
      <Image
        ref={eyeCloseRef}
        src="/eyeClose.svg"
        alt="x icon"
        width={80}
        height={80}
        className={css({
          display: "none",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        })}
      />
      <h2
        className={css({
          color: "#0A0F0E",
          fontFamily: "brandonGrotesque",
          fontWeight: 900,
          fontSize: 30,
          letterSpacing: "-0.02em",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        })}
      >
        <span className={css({display: "none",marginRight:"10px"})} ref={leftTextRef}>Patch</span><span className={css({display: "none"})} ref={rightTextRef}>8</span>
      </h2>
    </div>
  );
}
