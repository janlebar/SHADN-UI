"use client";

import HandymanPortfolioList from "@/components/contractors/contractors";
import { handymanProfiles } from "@/components/contractors/demo";
import { Header } from "@/components/header";
import Headerswitch from "@/components/headerswitch";
import Posts from "@/components/client/posts";
import React from 'react';
import { clientPosts } from '@/components/client/demo';
import Hero from "./landingpage/page";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { getCarouselImages } from '@/lib/getCarouselImages';

export default function Home() {
    const [api, setApi] = React.useState<CarouselApi | null>(null); // Initialized to null for type safety
    const images = getCarouselImages();
  
    return (
      <div>
        <Header />
        <Headerswitch />
        <Carousel setApi={setApi}>
          <CarouselContent className="-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-12 h-12 object-cover" // Tailwind classes for setting width and height
                  />
                  <p className="text-center mt-2">{image.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Hero />
       

      </div>
    );
}
