import { auth } from "@/auth";
import Featrues from "@/components/Featrues";
import Hero from "@/components/Hero";

export default async function Home() {

  return (
    <div>
      <Hero />
      <Featrues />
    </div>
  );
}
