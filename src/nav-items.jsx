import { HomeIcon, LogInIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import LoginPage from "./pages/LoginPage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogInIcon className="h-4 w-4" />,
    page: <LoginPage />,
  },
];
