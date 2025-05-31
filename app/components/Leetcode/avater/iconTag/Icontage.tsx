import React, { ReactElement } from "react";
interface icontext {
  icon?: ReactElement;
  text: string;
}

export const IconText: React.FC<icontext> = ({ icon, text }) => {
  return (
    <div className="flex text-text items-center space-x-2 text-sm font-normal my-1">
      {icon && icon} <p>{text}</p>
    </div>
  );
};
