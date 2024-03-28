import Hero from "@/components/sections/Hero";
import ContainerHead from "@/components/shared/ContainerHead";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <div className="w-full h-20 ">
        <ContainerHead />
      </div>
    </main>
  )
}
