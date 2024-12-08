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

import * as React from "react"
import { UserAuth } from "@utils/auth-provider";

export default function NavBar() {

    const {user, googleSignIn, googleSignOut} = UserAuth()

    const signIn = async () => {
        try {
          await googleSignIn()
        } catch (error) {
          console.log(error)
        }
    }

    const signOut = async () => {
      try {
        await googleSignOut()
      } catch (error) {
        console.log(error)
      }
    }

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
        // {
        //     item: "Dashboard",
        //     url: "/dashboard/people",
        // },
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
            user ? (
                <NavbarItem>
                    <Link color="foreground" href="/dashboard/people">Dashboard</Link>
                </NavbarItem>
            ):(<> </>)
        }

      </NavbarContent>

        <NavbarContent as="div" justify="end">
        {
            user ? (
                <></>
            ):(
                <NavbarItem>
                    <Button onPress={()=>signIn()} color="primary" variant="flat">Sign In</Button>
                </NavbarItem>
            )
        }
        {
          user ? (
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
                  <DropdownItem key="team_settings" as={Link} href="/dashboard/people" className="text-white">Dashboard</DropdownItem>
                  <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                  <DropdownItem key="signout">
                      <Button onClick={signOut} color="danger" variant="flat">Sign Out</Button>
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
          user ? (
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