import React from 'react';
import Explore from '../component/Explore';
import Features from '../component/Features';
import Hero from '../component/Hero';
import { cards, projects } from '../data';
import CatCard from '../component/CatCard';
import Slide from '../component/Slide';
import ProjectCard from '../component/ProjectCard';
import Featured from '../component/Featured';
import TrustedBy from '../component/TrustedBy';

export default function Home() {
  return (
    <div className="bg-gray-50">

      <Featured/>
       
       <TrustedBy/>

      {/* Hero Section */}
      <section className="bg-[#0d084d] py-24">
        <Hero />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-100">
        <Features />
      </section>

   {/* Slide Section */}
<div className="mx-auto md:px-8 w-full max-w-screen-xl">
  <Slide slidesToShow={4} slidesToScroll={2}>
    {cards.map((card) => (
      <CatCard key={card.id} card={card} />
    ))}
  </Slide>
</div>

      {/* Explore Section */}
      <section className="py-24 bg-white">
        <Explore />
      </section>
      <Slide slidesToShow={4} slidesToScroll={2}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}
