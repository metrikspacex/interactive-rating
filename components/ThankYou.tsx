import clsx from "clsx";
import Image from "next/image";

import IconThankYou from "@/public/illustration-thank-you.svg";
import type { Selected } from "@/types/selected";

export default function ThankYou({
  selected,
  width,
}: {
  selected: Selected;
  width: number;
}) {
  const selection = () => {
    return selected.filter((entries) => entries.selected === true)[0].id;
  };

  return (
    <section
      className={clsx(
        "absolute-center h-[289px] w-[279px]",
        "desktop:h-[326px] desktop:w-[340px]"
      )}>
      <Image
        alt="ThankYou!"
        className={clsx("m-[0_auto_24px_auto]")}
        height={Math.floor(width) <= 1440 ? 96 : 108}
        src={IconThankYou}
        width={Math.floor(width) <= 1440 ? 144 : 162}
      />
      <div
        className={clsx(
          "relative m-[0_auto_24px_auto] h-[32px] w-[168px] rounded-[20px]",
          "bg-dark-blue",
          "desktop:w-[193px]"
        )}>
        <h2
          className={clsx(
            "absolute-center w-[144px] pt-[4px] text-center font-sans",
            "text-[14px] font-normal not-italic leading-[22px] text-orange",
            "desktop:w-[193px] desktop:text-[15px] desktop:leading-[24px]",
            "desktop:pt-[5px]"
          )}>
          You selected {selection()} out of 5
        </h2>
      </div>
      <h1
        className={clsx(
          "mb-[10px] text-center font-sans text-[24px] font-normal not-italic",
          "leading-[37px] text-white",
          "desktop:text-[28px] desktop:font-bold desktop:leading-[44px]"
        )}>
        Thank You
      </h1>
      <p
        className={clsx(
          "m-[0_auto_0_auto] text-center font-sans text-[14px] font-normal",
          "leading-[22px] text-light-grey",
          "desktop:text-[15px] desktop:leading-[24px]"
        )}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
}
