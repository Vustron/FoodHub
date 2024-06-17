"use client   ";

import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/helpers/utils";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLElement> {
  scrolled: boolean;
}

const MainNav = ({ className, scrolled, ...props }: Props) => {
  // init pathname
  const pathName = usePathname();
  // init params
  const params = useParams();

  // init routes
  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathName === "/",
    },
    {
      href: "/menu",
      label: "Menu",
      active: pathName === "/menu",
    },
    {
      href: "/orders",
      label: "Orders",
      active: pathName === "/orders",
    },
    {
      href: "/about",
      label: "About",
      active: pathName === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathName === "/contact",
    },
  ];

  return (
    <div className="ml-auto">
      <nav
        className={cn(
          "flex items-center space-x-4 pl-6 lg:space-x-12",
          className,
        )}
      >
        {routes.map((route) => {
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                route.active
                  ? scrolled
                    ? "font-bold text-hero underline"
                    : "font-bold text-black underline dark:text-white"
                  : scrolled
                    ? "text-black"
                    : "text-white",
              )}
            >
              <span className="hover:scale-110 hover:font-bold hover:underline">
                {route.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MainNav;
