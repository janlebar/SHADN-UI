import React from 'react';
import Image from 'next/image'; // For optimized image handling
import {
  HandymanPortfolioContainer,
  HandymanPortfolioCard,
  HandymanPortfolioCardImage,
  HandymanPortfolioCardDetails,
  HandymanPortfolioCardName,
  HandymanPortfolioCardDescription,
  HandymanPortfolioCardSkills,
  HandymanPortfolioCardSkill,
} from "@/components/ui/card"

interface Handyman {
  name: string;
  picture: string; // URL or path to image
  description: string;
  skills: string[];
}

const HandymanPortfolioList: React.FC<Handyman[]> = ({ handymen }) => {
  return (
    <HandymanPortfolioContainer>
      {handymen.map((handyman) => (
        <HandymanPortfolioCard key={handyman.name}>
          <HandymanPortfolioCardImage>
            <Image
              src={handyman.picture}
              alt={handyman.name}
              width={200} // Set optimal image width based on design
              height={200} // Set optimal image height based on design
              layout="responsive" // For responsive image handling
              objectFit="cover" // Ensure image fills container while maintaining aspect ratio
            />
          </HandymanPortfolioCardImage>
          <HandymanPortfolioCardDetails>
            <HandymanPortfolioCardName>{handyman.name}</HandymanPortfolioCardName>
            <HandymanPortfolioCardDescription>{handyman.description}</HandymanPortfolioCardDescription>
            <HandymanPortfolioCardSkills>
              {handyman.skills.map((skill) => (
                <HandymanPortfolioCardSkill key={skill}>{skill}</HandymanPortfolioCardSkill>
              ))}
            </HandymanPortfolioCardSkills>
          </HandymanPortfolioCardDetails>
        </HandymanPortfolioCard>
      ))}
    </HandymanPortfolioContainer>
  );
};

export default HandymanPortfolioList;


