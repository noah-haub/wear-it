import React from "react";
import { cn } from "../utils";

export const Navbar = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"nav">>(({ ...props }, ref) => (
    <nav ref={ref} className={cn("w-full bg-white justify-between flex items-center px-6 py-4")} {...props} />
));
Navbar.displayName = "Navbar";

export const NavbarPageName = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<"h1">>(({ className, ...props }, ref) => (
    <h1 ref={ref} className={cn("text-black text-3xl font-light", className)} {...props} />
));
NavbarPageName.displayName = "NavbarPageName";

export const NavbarActionItem = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<"button">>(({ className, ...props }, ref) => (
    <button ref={ref} className={cn("text-black text-2xl", className)} {...props} />
));
NavbarActionItem.displayName = "NavbarActionItem";
