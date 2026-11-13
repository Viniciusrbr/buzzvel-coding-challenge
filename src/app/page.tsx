import { Categories } from "@/components/sections/Categories";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonial } from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCourse />
      <HowItWorks />
      <Testimonial />
    </>
  );
}
