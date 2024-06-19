'use client';
import * as React from "react";
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
    <div>
    <div className=" fixed z-50">
      <Button onClick={toggleCard}>Chat</Button>
      {showCard && (
        <Card>
          <div className="p-4">
            <Button onClick={handleCancel}>Close</Button>
            <ChatPage />
          </div>
        </Card>
      )}
    </div>
    </div>
  );
};

export { ChatButton };
