import HomePage from "../views/HomePage/HomePage";
import PageNotFound from "../views/components/PageNotFound";
import AddMachine from "../views/Auth/AddMachine"


import {
  HomeIcon,
  SettingsIcon,
} from "../views/components/icons";






  
const machineManagementPaths = {
  isDropdown: false,
  routes: [
    {
      title: "Add machine",
      path: "/login",
      component: AddMachine,
      icon: SettingsIcon,
      inMenu: true,
    },
    
  ],
}

const communPathsCategory = {
  isDropdown: false,
  routes: [
    {
      title: "Dashbords",
      path: "/",
      component: HomePage,
      icon: HomeIcon,
      inMenu: true,
    },
    
  ],
};


const errorPathsCategory = {
  title: "Errors",
  isDropdown: false,
  routes: [
    {
      title: "Errors",
      path: "/*",
      component: PageNotFound,
      inMenu: false,
    },
  ],
};

const menus = [
  machineManagementPaths,
  communPathsCategory,
  
  errorPathsCategory,
];

const routes = [
  ...machineManagementPaths.routes,
  ...communPathsCategory.routes,
  
  ...errorPathsCategory.routes,
];

export { routes, menus };
