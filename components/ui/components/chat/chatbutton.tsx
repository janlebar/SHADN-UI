'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";

const ChatButton: React.FC = () => {
  const [showCard, setShowCard] = React.useState(false);

  // Load the component dynamically to ensure it's treated as a Client Component
  const ChatPage = dynamic(() => import("./chat").then(mod => mod.default), { ssr: false });

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const handleCancel = () => {
    setShowCard(false);
  };

  return (
    <div className="relative">
      <Button onClick={toggleCard}>Chat</Button>
      {showCard && (
        <div className="absolute top-full mt-2 right-0 z-50">
          <Card className="w-64">
            <div className="p-4">
              <Button onClick={handleCancel}>Close</Button>
              <ChatPage />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export { ChatButton };
