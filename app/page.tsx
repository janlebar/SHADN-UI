// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import HandymanPortfolioList from "@/components/handyman/handyman"
import { handymanProfiles } from "@/components/handyman/demo"
import {Header} from "@/components/header"

export default function Home() {
  return (
    <div>
      {/* <Avatar>
  <AvatarImage src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      <Button>Click me</Button> */}
      <Header></Header>
      <HandymanPortfolioList handymen={handymanProfiles} />


    </div>
  )
}


