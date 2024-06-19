// components/ui/customUI/LocationButton.tsx
// @ts-nocheck
'use client';
import * as React from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const LocationButton: React.FC = () => {
  const [showCard, setShowCard] = React.useState(false);

  // Load the component dynamically to ensure it's treated as a Client Component
  const CardWithForm = dynamic(() => import("./addlocation").then(mod => mod.CardWithForm), { ssr: false });

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const handleCancel = () => {
    setShowCard(false);
  };

  return (
    <div>
      <Button onClick={toggleCard}>Change location</Button>
      {showCard && <CardWithForm onCancel={handleCancel} />}
    </div>
  );
};

export { LocationButton };
