"use client"

import NavBar from "@components/navs/NavBar"
import Feature from "@components/widgets/Feature"
import { Button } from "@nextui-org/button"
import Link from "next/link"

import {useSession, signIn} from "next-auth/react"

const Home = () => {
  const {data:session} = useSession()
  const features = [
    {
      name: 'Secure Access',
      subtitle: "Securely access your data anywhere",
      url: '/features#broadcast-info',
      icon: '/assets/images/access.webp',
    },
    {
      name: 'Databases',
      subtitle: "simply store and manage church information",
      url: '/features#databases-info',
      icon: '/assets/images/database.webp',
    },
    {
      name: 'Project Management',
      subtitle: "assign tasks, manage plans and projects",
      url: '/features#projects-info',
      icon: '/assets/images/projects.webp',
    },
    {
      name: 'Finance',
      subtitle: "store and manage financial records",
      url: '/features#finances-info',
      icon: '/assets/images/finance.webp',
    },
  ]
  return (
    <>
      <NavBar/>
      <section className="w-full flex flex-col items-center justify-center p-10 py-4 ">
        <h1 className="text-4xl font-bold p-3">The Free Ultimate Church Management System</h1>
        <h1 className="text-4xl font-bold p-3">Simplifying God's work</h1>
        <h3 className="text-lg p-1">Managing Plans, Projects, Staff, Finances, scheduling tasks</h3>
        <h3 className="text-lg p-1 mb-5">backed up database, broadcast messages and lots more</h3>
        {
          session?.user ? (
            <Button  as={Link} href="/dashboard/people" color="primary" radius="full" variant="bordered">{"Go To Dashboard >>> "}</Button>
          ):(
            <Button color="primary" radius="full" variant="bordered" onPress={()=>{signIn()}}>{"Get Started For Free >>> "}</Button>            
          )
        }
      </section>

      <section className="w-full p-2 flex flex-row flex-warp items-center justify-evenly overflow-x-scroll">
        {
          features.map((feature)=>(
            <div className="min-w-[280px] w-full lg:w-1/4 m-2" key={feature.name}>
              <Feature name={feature.name} subtitle={feature.subtitle} url={feature.url} icon={feature.icon}/>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Home