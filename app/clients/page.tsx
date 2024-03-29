// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import HandymanPortfolioList from "@/components/contractors/contractors"
import { handymanProfiles } from "@/components/contractors/demo"
import {Header} from "@/components/header"
import Headerswitch from "@/components/headerswitch"
import Posts from "@/components/client/posts"
import {clientPosts} from '@/components/client/demo';


export default function ContractorsPage() {
  return (
    <div>
      <Header/>
      <Headerswitch/>
      <Posts posts={clientPosts} />


    </div>
  )
}
