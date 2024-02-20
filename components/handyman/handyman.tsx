import React from 'react';
import Image from 'next/image'; // For optimized image handling
// import { Card } from "@/components/ui/card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface Handyman {
  name: string;
  picture: string; // URL or path to image
  description: string;
  skills: string[];
  location: {
    latitude: number;
    longitude: number;
  }
}

const HandymanPortfolioList: React.FC<{ handymen: Handyman[] }> = ({ handymen }) => {
  return (
    <div> {/* Consider using a container if necessary */}
      {handymen.map((handyman, index) => (
        <Card key={index}>
          <CardHeader>
            {handyman.picture ? (
              <Image
                src={handyman.picture.startsWith('/') ? handyman.picture : `/${handyman.picture}`}
                alt={handyman.name}
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            ) : (
              <div>Error: Image source is missing for {handyman.name}</div>
            )}
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



