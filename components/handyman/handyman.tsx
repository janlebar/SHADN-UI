import React from 'react';
import Image from 'next/image'; // For optimized image handling
import {Card} from "@/components/ui/card";
import {
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Handyman {
  name: string;
  picture: string; // URL or path to image
  description: string;
  skills: string[];
}

const HandymanPortfolioList: React.FC<{ handymen: Handyman[] }> = ({ handymen }) => {
  return (
    <div> {/* Consider using a container if necessary */}
      {handymen.map((handyman) => (
        <Card key={handyman.name}>
          <CardHeader>
            <Image
              src={handyman.picture}
              alt={handyman.name}
              width={200} // Set optimal image width based on design
              height={200} // Set optimal image height based on design
              layout="responsive" // For responsive image handling
              objectFit="cover" // Ensure image fills container while maintaining aspect ratio
            />
          </CardHeader>
          <CardContent>
            <CardTitle>{handyman.name}</CardTitle>
            <CardDescription>{handyman.description}</CardDescription>
            {/* Rendering skills can be done similarly */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HandymanPortfolioList;


