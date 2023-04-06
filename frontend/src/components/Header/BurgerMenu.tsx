import React from "react";

type Props = {
  children?: React.ReactNode
}

const BurgerMenu = ({ children }: Props) => {


  return (
    <>
      <div className="Items">
        {children}
      </div>

    </>
    
  );
};

export default BurgerMenu;