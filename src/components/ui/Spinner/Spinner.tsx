import React from "react";
import { SpinnerRoundFilled } from "spinners-react";

import './spinner.css'

interface SpinerProps {
  size: number
} 

const Spinner: React.FC<SpinerProps> = ({size}) => {
  return (
    <div className="spinner">
      <SpinnerRoundFilled
        size={size}
        thickness={100} 
        color="#f54646" 
      />
    </div>
  );
};

export default Spinner;
