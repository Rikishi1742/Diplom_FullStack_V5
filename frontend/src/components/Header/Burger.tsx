
const Burger = () => {

    const Burger = (document.getElementsByClassName("Burger") as HTMLCollectionOf<HTMLElement>)
    const BurgerMenu = (document.getElementsByClassName("BurgerMenu") as HTMLCollectionOf<HTMLElement>)
    const menuItems = (document.getElementsByClassName("Items") as HTMLCollectionOf<HTMLElement>)

    return(
    <div className="Burger" onClick={() => 
            {
                Burger[0].style.display = "none"
                BurgerMenu[0].style.display = "block"
                menuItems[0].style.display = "block"
            }
        }>
        <img src="../Burger.svg" alt="" />
    </div>);
} 

export default Burger;