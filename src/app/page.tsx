import { Navbar } from '@/components/Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Service } from './Service';
import { Client } from './Client';
import { Team } from './Team';
import { Blog } from './Blog';
import { Partner } from './Partner';
import { Work } from './Work';
import { Commentary } from './Commentary';
import { Alllearn } from './Alllearn';
import { College } from './College';
import Footer from '@/components/Footer';



export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Team />
      <Blog />
      <Client />
      <Work />
      <Commentary />
      <Alllearn />
      <College />
      <Footer />
    </>
  )
}
