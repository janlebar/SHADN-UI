// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import HandymanPortfolioList from "@/components/contractors/contractors"
import { handymanProfiles } from "@/components/contractors/demo"
import {Header} from "@/components/header"
import Headerswitch from "@/components/headerswitch"


export default function ContractorsPage() {
  return (
    <div>
      <Header/>
      <Headerswitch/>
      <HandymanPortfolioList handymen={handymanProfiles} />


    </div>
  )
}
