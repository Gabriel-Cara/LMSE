import { Navbar } from "@/components/Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Service } from "./Service";
import { Client } from "./Client";
import { Team } from "./Team";
import { Blog } from "./Blog";
import { Partner } from "./Partner";
import { Work } from "./Work";



export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Partner />
      <Team />
      <Blog />
      <Client />
      <Work />
      {/* <Footer /> */}
    </>
  )
}
