// components/ui/CardWithForm.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CardWithFormProps {
  onCancel: () => void;
}

export const CardWithForm: React.FC<CardWithFormProps> = ({ onCancel }) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-50">
      <Card className="w-[350px] z-50">
        <CardHeader>
          <CardTitle>Location</CardTitle>
          <CardDescription>Change your current location</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Country</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Slovenia</SelectItem>
                    <SelectItem value="sveltekit">Austria</SelectItem>
                    <SelectItem value="astro">Germany</SelectItem>
                    <SelectItem value="nuxt">Italy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Street</Label>
                <Input id="name" placeholder="Name and street number" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
