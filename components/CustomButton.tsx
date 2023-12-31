// "use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React, { ReactPropTypes } from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  buttonType,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
    disabled={isDisabled}
      type={buttonType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon&&(
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt={rightIcon} fill className="object-contain"/>
        </div>
      )}
    </button>
  );
};

export default CustomButton;
