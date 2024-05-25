// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import HandymanPortfolioList from "@/components/contractors/contractors"
import { handymanProfiles } from "@/components/contractors/demo"
import {Header} from "@/components/header"
import Headerswitch from "@/components/headerswitch"
import Posts from "@/components/client/posts"
import React from 'react';
// import MyComponentPage from "@/components/landingpage";
import {clientPosts} from '@/components/client/demo';
import Hero from "./landingpage/page"
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; 
// import Map from './landingpage/page';

export default function Home() {
  return ( 
    <div>
      {/* <Avatar>
  <AvatarImage src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      <Button>Click me</Button> */}
      <Header/>
      <Headerswitch/>
      <Hero/>
      {/* <Map/> */}
      {/* <Posts posts={clientPosts} /> */}
      {/* <HandymanPortfolioList handymen={handymanProfiles} /> */}


      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}




// const MyPage: React.FC = () => {
//   return (
//     <div>
//       <Posts posts={clientPosts} />
//     </div>
//   );
// };

// export default MyPage;
