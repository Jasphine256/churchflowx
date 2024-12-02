"use client"
import Link from "next/link"
import Image from "next/image"
import NavBar from "@components/navs/NavBar"
import Feature from "@components/widgets/Feature"
import { Button } from "@nextui-org/button"

const Home = () => {
  const features = [
    {
      name: 'Databases',
      subtitle: "simple subtitle",
      url: '/features#databases-info',
      icon: '/assets/icons/database.png',
    },
    {
      name: 'Finance',
      subtitle: "simple subtitle",
      url: '/features#finances-info',
      icon: '/assets/icons/finance.png',
    },
    {
      name: 'Broadcast',
      subtitle: "simple subtitle",
      url: '/features#broadcast-info',
      icon: '/assets/icons/message.png',
    },
    {
      name: 'Projects',
      subtitle: "simple subtitle",
      url: '/features#projects-info',
      icon: '/assets/icons/project.png',
    },
  ]
  return (
    <>
      <NavBar/>
      <section className="mt-2 w-full flex flex-col items-center justify-center p-10 ">
        <h1 className="text-4xl font-bold p-3">The Free Ultimate Church Management System</h1>
        <h1 className="text-4xl font-bold p-3">Simplifying God's work</h1>
        <h3 className="text-lg p-1">Managing Plans, Projects, Staff, Finances, scheduling tasks</h3>
        <h3 className="text-lg p-1 mb-5">backed up database, broadcast messages and lots more</h3>
        <Button onClick={() => {signIn}} color="primary" radius="full" variant="bordered">{"Get Started For Free >>> "}</Button>
      </section>

      <section className="w-full p-2 flex flex-row flex-warp items-center justify-evenly overflow-x-scroll">
        {
          features.map((feature)=>(
            <div className="min-w-[280px] w-full lg:w-1/4 m-4" key={feature.name}>
              <Feature name={feature.name} subtitle={feature.subtitle} url={feature.url} icon={feature.icon}/>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Home