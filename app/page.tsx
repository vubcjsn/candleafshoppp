import Hero from "../app/components/Hero";
import { getHero } from "@/utils/queries";
export default async function Home() {
  const heroData = await getHero();

  console.log(heroData);
  return (
    <>
      <Hero hero={heroData} />
    </>
  );
}
