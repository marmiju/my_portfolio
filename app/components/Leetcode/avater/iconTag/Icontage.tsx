import React, { ReactElement } from "react";
interface icontext {
  icon?: ReactElement<any, any>;
  text: string;
}

export const IconText: React.FC<icontext> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2 text-sm font-normal my-1">
      {icon && icon} <p>{text}</p>
    </div>
  );
};
