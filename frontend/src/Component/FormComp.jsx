import React from "react";
import { addAreaFormCofig } from "../Config/config";
import { inputTypes } from "../Config/InputTypes";


export const CheckTypeComponent = ({ item }) => {


  console.log(item);

  const InputComponent = inputTypes[item?.type];
  // console.log(InputComponent,"input")


  return (
    <div>
      <InputComponent {...item} />
    </div>
  );
};






export const FormComp = ({ addAreaFormCofig }) => {
  return (
    <div>
      {addAreaFormCofig.map((item, index) => {
        return <CheckTypeComponent item={item} key={index} />;
      })}
    </div>
  );
};
