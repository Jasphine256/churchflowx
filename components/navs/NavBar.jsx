'use client'
import {Link} from "@nextui-org/link"
import {Avatar} from "@nextui-org/avatar"
import {Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarBrand, NavbarItem} from "@nextui-org/navbar"
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown"
import * as React from "react"
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@nextui-org/button"

export default function NavBar() {

  const { data: session, status } = useSession();

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: "Features", href:'/features', current: false},
        { name: 'About', href: '/about', current: false },
      ]

      const [isMenuOpen, setIsMenuOpen] = React.useState(false);

      const menuItems = [
        {
            item: "Home",
            url: "/",
        },
        {
            item: "Features",
            url: "/features",
        },
        {
            item: "About",
            url: "/about",
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
                <p className="font-bold text-inherit text-xl">ChurchFlow</p>
            </NavbarBrand>
        </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
            navigation.map((item) => (
              <div key={item.href}>
                <NavbarItem>
                    <Link color="foreground" href={item.href}>{item.name}</Link>
                </NavbarItem>
              </div>
            ))
        }
        {
            session?.user ? (
                <NavbarItem>
                    <Link color="foreground" href="/dashboard/people">Dashboard</Link>
                </NavbarItem>
            ):(<> </>)
        }

      </NavbarContent> */}

        <NavbarContent as="div" justify="end">
        {
            session?.user ? (
                <></>
            ):(
                <NavbarItem>
                    <Button variant="flat" color="primary" radius="sm" onPress={signIn}>Sign In</Button>
                </NavbarItem>
            )
        }
        {
          session?.user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
              <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src={session.user.image}
              />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-18 gap-2">
                      <p className="font-bold p-1 text-lg">Signed In As</p>
                      <p className="font-semibold py-1 text-md">{session.user.name}</p>
                      <p className="font-thin py-1 text-sm">{session.user.email}</p>
                  </DropdownItem>
                  <DropdownItem key="team_settings" as={Link} href="/dashboard/people" className="text-white">Dashboard</DropdownItem>
                  <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                  <DropdownItem key="signout">
                    <Button variant="flat" color="danger" radius="sm" onPress={signOut}>Sign Out</Button>
                  </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ):(
            <></>
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
        {
          session?.user ? (
            <NavbarMenuItem key={"dashboard"}>
            <Link
            color="foreground"
            className="w-full"
            href="/dashboard/people"
            size="lg"
          >
            Dashboard
          </Link>
            </NavbarMenuItem>
          ):(<></>)
        }
      </NavbarMenu>
    </Navbar>
  );
}