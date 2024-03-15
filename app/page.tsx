// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import HandymanPortfolioList from "@/components/contractors/contractors"
import { handymanProfiles } from "@/components/contractors/demo"
import {Header} from "@/components/header"
import Headerswitch from "@/components/headerswitch"
import Posts from "@/components/client/posts"

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
      <Posts/>
      <HandymanPortfolioList handymen={handymanProfiles} />


    </div>
  )
}


