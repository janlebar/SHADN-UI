// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { MailDisplay } from "@/components/email/email"
import MailPage from "@/components/email/email"
import {Header} from "@/components/header"
import Headerswitch from "@/components/headerswitch"


export default function ContractorsPage() {
  return (
    <div>
      <Header/>
      <Headerswitch/>
      {/* <MailDisplay mail={null}/> */}
    <MailPage/>

    </div>
  )
}
