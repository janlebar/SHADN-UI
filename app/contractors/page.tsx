// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import HandymanPortfolioList from "@/components/contractors/contractors"
import { handymanProfiles } from "@/components/contractors/demo"
import {Header} from "@/components/header"



export default function ContractorsPage() {
  return (
    <div>
      <Header/>
      <HandymanPortfolioList handymen={handymanProfiles} />


    </div>
  )
}
