import {
  About,
  Banner,
  Contact,
  Portfolio,
  Resume,
  Sidebar,
  Skills,
} from "@/components";

export default function Home() {
  return (
    <div className="">
      <Sidebar />
      <main className="main">
        <Banner />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
