import About from "./_sections/about/about";
import Intro from "./_sections/intro/intro";
import Projects from "./_sections/projects/projects";

export default function Home() {
  return (
    <main className="">
      <Intro/>
      <About/>
      <Projects/>
    </main>
  )
}
