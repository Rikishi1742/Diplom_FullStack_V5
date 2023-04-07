
const Burger = () => {

    const Burger = (document.getElementsByClassName("Burger") as HTMLCollectionOf<HTMLElement>)
    const BurgerMenu = (document.getElementsByClassName("BurgerMenu") as HTMLCollectionOf<HTMLElement>)
    const menuItems = (document.getElementsByClassName("Items") as HTMLCollectionOf<HTMLElement>)
    const darktheme = (document.getElementsByClassName("darktheme") as HTMLCollectionOf<HTMLElement>)
    const leaveBurgerMenu = (document.getElementsByClassName("LeaveBurgerMenu") as HTMLCollectionOf<HTMLElement>)

    return(
    <div className="Burger" onClick={() => 
            {
                Burger[0].style.display = "none"
                BurgerMenu[0].style.display = "flex"
                menuItems[0].style.display = "flex"
                darktheme[0].style.display = "block"
                leaveBurgerMenu[0].style.display = "block"
            }
        }>
        <img src="../Burger.svg" alt="" />
    </div>);
} 

export default Burger;