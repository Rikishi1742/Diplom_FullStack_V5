import React from "react";

type Props = {
  children?: React.ReactNode
}

const BurgerMenu = ({ children }: Props) => {
  /*
  const menuItems = (document.getElementsByClassName("Items") as HTMLCollectionOf<HTMLElement>)
  const BurgerMenu = (document.getElementsByClassName("BurgerMenu") as HTMLCollectionOf<HTMLElement>)
  
*/
  
  return (
    <>
      <div className="Items">
        {children}
      </div>

    </>
    
  );
};

export default BurgerMenu;