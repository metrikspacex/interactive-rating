"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

import Rating from "@/components/Rating";
import ThankYou from "@/components/ThankYou";
import type { Selected } from "@/types/selected";

export default function Home() {
  const [submit, setSubmit] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [selected, setSelected] = useState<Selected>([
    {
      id: "1",
      selected: false,
    },
    {
      id: "2",
      selected: false,
    },
    {
      id: "3",
      selected: false,
    },
    {
      id: "4",
      selected: false,
    },
    {
      id: "5",
      selected: false,
    },
  ]);

  const setWinWidth = () => {
    const winWidth = window.innerWidth;
    setWidth(winWidth);
    console.log("ran");
  };

  useEffect(() => {
    window.addEventListener("resize", setWinWidth);
    return () => {
      window.removeEventListener("resize", setWinWidth);
    };
  }, []);

  return (
    <main
      className={clsx(
        "absolute-center h-[360px] w-[327px] rounded-[15px] bg-radial font-sans",
        "desktop:h-[416px] desktop:w-[412px]"
      )}>
      {submit ? (
        <ThankYou selected={selected} width={width} />
      ) : (
        <Rating
          selected={selected}
          setSelected={setSelected}
          setSubmit={setSubmit}
        />
      )}
    </main>
  );
}
