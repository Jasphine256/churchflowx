'use client'
import {Link} from "@nextui-org/link"
import {Avatar} from "@nextui-org/avatar"
import {Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarBrand, NavbarItem} from "@nextui-org/navbar"
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown"

import * as React from "react"
import { useSession } from "next-auth/react";
import SignOutBtn from "@components/SignOutBtn"
export default function DashboardNav() {

      const [isMenuOpen, setIsMenuOpen] = React.useState(false);

      const { data: session, status } = useSession();

      const menuItems = [
        {
            item: "Home",
            url: "/",
        },
        {
            item: "People",
            url: "/dashboard/people",
        },
        {
            item: "Collections",
            url: "/dashboard/collections",
        },
        {
            item: "Finance",
            url: "/dashboard/finance",
        },
      ];

  return (
    <Navbar isBordered={true}>

        <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            />
            <NavbarBrand>
                <p className="font-bold text-inherit text-xl">Dashboard</p>
            </NavbarBrand>
        </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
            <Link href="/" isBlock color="foreground">Home</Link>
        </NavbarItem>
        {/* <NavbarItem>
            <Link href="/dashboard" isBlock color="foreground">Overview</Link>
        </NavbarItem> */}
        <NavbarItem>
            <Link href="/dashboard/people" isBlock color="foreground">People</Link>
        </NavbarItem>
        <NavbarItem>
            <Link href="/dashboard/collections" isBlock color="foreground">Collections</Link>
        </NavbarItem>
        <NavbarItem>
            <Link href="/dashboard/finance" isBlock color="foreground">Finance</Link>
        </NavbarItem>

      </NavbarContent>

        <NavbarContent as="div" justify="end">
        {status === "loading"? (
            <>loading profile...</>
        ):(
            <Dropdown placement="bottom-end">
            <DropdownTrigger>
            <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="success"
                name="Jason Hughes"
                size="sm"
                src={session.user.image}
            />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold py-1 text-lg">Signed In As</p>
                    <p className="font-semibold py-1 text-md">{session.user.name}</p>
                    <p className="font-thin py-1 text-sm">{session.user.email}</p>
                </DropdownItem>
                {/* <DropdownItem key="team_settings" as={Link} href="/dashboard" className="text-white" >Overview</DropdownItem> */}
                <DropdownItem key="analytics">Settings</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="signout">
                    <SignOutBtn/>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        )
        }
        </NavbarContent>

      <NavbarMenu>
        {
        menuItems.map((item) => (
          <NavbarMenuItem key={`${item.item}`}>
            <Link
              color="foreground"
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.item}
            </Link>
          </NavbarMenuItem>
        ))
        }
      </NavbarMenu>
    </Navbar>
  );
}