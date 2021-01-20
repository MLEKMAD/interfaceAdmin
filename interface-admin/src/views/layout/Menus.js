import { menus } from "../../routes/routes";

const getMenu = () =>
  menus
    .map((menu) => ({
      ...menu,
      subMenus: menu.routes
        .filter((route) => route.inMenu)
    }))
    .filter((menu) => !menu.isDropdown || menu.subMenus.length > 0);

export { getMenu};
