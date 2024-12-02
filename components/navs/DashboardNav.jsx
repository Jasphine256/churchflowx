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

export default function DashboardNav() {

    const {data:session} = useSession()

    const DROP_DOWNS = [
        { 
            item: 'People',
            sections: [
                {
                    name: "Members",
                    description: "members of church",
                    url: "/dashboard/members"
                },
                {
                    name: "Visitors",
                    description: "temporary visitations",
                    url: "/dashboard/visitors"
                },
                {
                    name: "Ministers",
                    description: "those that serve",
                    url: "/dashboard/ministers"
                },
                {
                    name: "Pastors",
                    description: "those that minister",
                    url: "/dashboard/pastors"
                },
            ]
        },
        { 
            item: 'Collections',
            sections: [
                {
                    name: "Tasks",
                    description: "assignments to ministers",
                    url: "/dashboard/tasks"
                },
                {
                    name: "Plans",
                    description: "future church plans",
                    url: "/dashboard/plans"
                },
                {
                    name: "Projects",
                    description: "ongoing executed plans",
                    url: "/dashboard/projects"
                },
            ]
        },
        { 
            item: 'Finance',
            sections: [
                {
                    name: "Payments",
                    description: "cash outflow",
                    url: "/dashboard/payments"
                },
                {
                    name: "Funds",
                    description: "cash inflow",
                    url: "/dashboard/funds"
                },
                {
                    name: "Budgets",
                    description: "accountability",
                    url: "/dashboard/budgets"
                },
            ]
        },
      ]

      const [isMenuOpen, setIsMenuOpen] = React.useState(false);


      const menuItems = [
        {
            item: "Home",
            url: "/",
        },
        // {
        //     item: "Overview",
        //     url: "/dashboard",
        // },
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
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
            <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="success"
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
                {/* <DropdownItem key="team_settings" as={Link} href="/dashboard" className="text-white" >Overview</DropdownItem> */}
                <DropdownItem key="analytics">Settings</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="signout">
                    <Button onClick={()=>signOut({callbackUrl:'/'})} color="danger" variant="flat">Sign Out</Button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
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