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
    <div className="flex justify-center items-center"> {/* Center the content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl"> {/* Responsive grid */}
        {handymen.map((handyman, index) => (
          <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg">
            <Card>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HandymanPortfolioList;




