"use client";

import HandymanPortfolioList from "@/components/contractors/contractors";
import { handymanProfiles } from "@/components/contractors/demo";
import { Header } from "@/components/header";
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
    const orientation = "horizontal";

  
    return (
      <div>
        <Header />
        <Carousel setApi={setApi} orientation={orientation}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className=" md:pl-0 md:basis-1/3 lg:basis-1/4 max-w-xs">
                  <div className="flex flex-col items-center justify-center max-w-md mx-auto p-1">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-8 h-8 object-cover" // Tailwind classes for setting smaller width and height
                    />
                    <p className="text-center mt-0.5">{image.title}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={orientation === "horizontal" 
              ? "left-5 top-1/2 -translate-y-1/2"
              : "absolute h-8 w-8 rounded-full -top-12 left-1/2 -translate-x-1/2 rotate-90"}
            />
            <CarouselNext className={orientation === "horizontal" 
              ? "right-5 top-1/2 -translate-y-1/2"
              : "absolute h-8 w-8 rounded-full -top-12 left-1/2 -translate-x-1/2 rotate-90"}
            />
          </Carousel>
        <Hero />
       

      </div>
    );
}
