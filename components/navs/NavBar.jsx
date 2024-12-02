'use client'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownTrigger,
    Avatar
} from "@nextui-org/react";

import {useSession, signOut, signIn} from "next-auth/react"
import * as React from "react"

export default function NavBar() {

    const {data:session} = useSession()

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: "Features", href:'/features', current: false},
        { name: 'About', href: '/about', current: false },
      ]

      const [isMenuOpen, setIsMenuOpen] = React.useState(false);

      const menuItems = [
        "Home",
        "Features",
        "About",
        "Dashboard",
        "Sign In",
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
            navigation.map((item) => (
                <NavbarItem>
                    <Link color="foreground" href={item.href}>{item.name}</Link>
                </NavbarItem>
            ))
        }
        {
            session?.user ? (
                <NavbarItem>
                    <Link color="foreground" href="/dashboard">Dashboard</Link>
                </NavbarItem>
            ):(<> </>)
        }

      </NavbarContent>

        <NavbarContent as="div" justify="end">
        {
            session?.user ? (
                <NavbarItem>
                    <Button onClick={()=>signOut({callbackUrl:'/'})} color="primary" variant="flat">Sign Out</Button>
                </NavbarItem>
            ):(
                <NavbarItem>
                    <Button onClick={() => {signIn}} color="primary" variant="flat">Sign In</Button>
                </NavbarItem>
            )
        }
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
            <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">Profile</DropdownItem>
                <DropdownItem key="team_settings" as={Link} href="/dashboard">Dashboard</DropdownItem>
                <DropdownItem key="analytics">Settings</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="signout">
                    <Button onClick={()=>signOut({callbackUrl:'/'})} color="primary" variant="flat">Sign Out</Button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </NavbarContent>

      <NavbarMenu>
        {
        menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))
        }
      </NavbarMenu>
    </Navbar>
  );
}