"use client";

import clsx from "clsx";
import Image from "next/image";
import type { Dispatch, SetStateAction, SyntheticEvent } from "react";

import IconStar from "@/public/icon-star.svg";
import type { Selected } from "@/types/selected";

export default function Rating({
  selected,
  setSelected,
  setSubmit,
}: {
  selected: Selected;
  setSelected: Dispatch<SetStateAction<Selected>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const onClick = () => {
    setSubmit((prevState) => !prevState);
  };
  const onSelected = (event: SyntheticEvent<HTMLLIElement, Event>) => {
    const target = event.currentTarget;
    const newState = selected.map((entries) => {
      if (entries.id === target.id) {
        return {
          id: entries.id,
          selected: true,
        };
      }
      return {
        id: entries.id,
        selected: false,
      };
    });
    setSelected(newState);
  };

  return (
    <section
      className={clsx(
        "absolute-center h-[304px] w-[279px]",
        "desktop:h-[326px] desktop:w-[340px]"
      )}>
      <div
        className={clsx(
          "relative mb-[16px] h-[40px] w-[40px] rounded-[20px] bg-dark-blue",
          "desktop:mb-[30px] desktop:h-[48px] desktop:w-[48px]",
          "desktop:rounded-[28px]"
        )}>
        <Image
          alt="Star!"
          className={clsx("absolute-center")}
          height={14}
          src={IconStar}
          style={{ width: "auto", height: "auto" }}
          width={14}
        />
      </div>
      <div
        className={clsx(
          "flex h-[179px] w-[279px] flex-col",
          "desktop:h-[197px] desktop:w-[341px]"
        )}>
        <h1
          className={clsx(
            "mb-[10px] font-sans text-[24px] font-bold not-italic",
            "leading-[37px] text-white",
            "desktop:mb-[7px] desktop:leading-[43px]"
          )}>
          How did we do?
        </h1>
        <p
          className={clsx(
            "mb-[24px] font-sans text-[14px] font-normal not-italic ",
            "leading-[22px] text-light-grey",
            "desktop:mb-[32px] desktop:leading-[24px]"
          )}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul
          className={clsx(
            "flex h-[42px] w-[279px] justify-between",
            "desktop:h-[51px] desktop:w-[341px]"
          )}>
          {selected.map((item) => (
            <li
              aria-hidden="true"
              className={clsx(
                item.selected ? "selected" : "",
                "hovering relative flex h-[42px] w-[42px]",
                "rounded-[20px] bg-dark-blue",
                "desktop:h-[51px] desktop:w-[51px] desktop:rounded-[24px]"
              )}
              id={item.id}
              key={`rating-${item.id}`}
              onClick={onSelected}>
              <h3
                className={clsx(
                  "absolute left-[50%] top-[55%] translate-x-[-50%]",
                  "h-[24px] w-[8px] translate-y-[-50%] text-center font-sans",
                  "text-[14px] font-bold leading-[24px] text-medium-grey"
                )}>
                {item.id}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={clsx(
          "hovering mt-[24px] h-[45px] w-[279px] rounded-[22.5px] bg-orange",
          "uppercase",
          "desktop:mt-[32px] desktop:w-[341px]"
        )}
        type="button"
        onClick={onClick}>
        submit
      </button>
    </section>
  );
}
