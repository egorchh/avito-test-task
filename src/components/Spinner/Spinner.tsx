import React from "react";
import { SpinnerRoundFilled } from "spinners-react";

interface SpinerProps {
  size: number
} 

const Spinner: React.FC<SpinerProps> = ({size}) => {
  return (
    <SpinnerRoundFilled
      size={size}
      thickness={100} 
      color="#f54646" 
    />
  );
};

export default Spinner;
