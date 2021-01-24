import Dashbord from "../views/dashbord/Dashbord";
import PageNotFound from "../views/components/PageNotFound";
import AddMachine from "../views/MachineManagment/AddMachine"
import ChooseMachine from "../views/MachineManagment/ChooseMachine"


import {
  HomeIcon,
  SettingsIcon,
  StatisticsIcon,
  LogsIcon,
} from "../views/components/icons";
import DisplayLogs from "../views/components/DisplayLogs";







const machineManagementPaths = {
  title: "Machines management",
  isDropdown: true,
  icon: SettingsIcon,
  routes: [
    {
      title: "Add machine",
      path: "/addMachine",
      component: AddMachine,
      icon: SettingsIcon,
      inMenu: true,
    },
    {
      title: "Choose machine",
      path: "/choosemachine",
      component: ChooseMachine,
      icon: SettingsIcon,
      inMenu: true,
    },
    
    
  ],
};
const logsPath = {
  isDropdown: false,
  routes: [
    {
      title: "Logs",
      path: "/logs",
      component: DisplayLogs,
      icon: LogsIcon,
      inMenu: true,
    },
    
  ],
};
const communPathsCategory = {
  isDropdown: false,
  routes: [
    {
      title: "Dashbords",
      path: "/",
      component: Dashbord,
      icon: StatisticsIcon,
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
  logsPath,
  errorPathsCategory,
];

const routes = [
  ...machineManagementPaths.routes,
  ...communPathsCategory.routes,
  ...logsPath.routes,
  ...errorPathsCategory.routes,
];

export { routes, menus };
