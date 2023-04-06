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

      <div className="Burger">
        <img src="../Burger.svg" alt="" />
      </div>
    </>
    
  );
};

export default BurgerMenu;