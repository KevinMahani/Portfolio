"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NavbarLogo() {


  return (
    <Link href="/">
        <DotLottieReact
        src="https://lottie.host/9388f40b-33fe-4767-addf-faf45abc8d57/x4wVQFAckc.lottie"
        loop
        autoplay
        speed={0.5}                
        className="w-28 sm:w-32 md:mb-12 cursor-pointer"
        />
    </Link>
  );
}
