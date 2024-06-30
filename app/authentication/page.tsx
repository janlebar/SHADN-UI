import AuthenticationPage from "@/components/authentication/authentication"
import {Header} from "@/components/header"
import ProfileMenu from "@/components/headerswitch"


export default function ContractorsPage() {
  return (
    <div>
      <Header/>
      <ProfileMenu/>
      {/* <MailDisplay mail={null}/> */}
    <AuthenticationPage/>

    </div>
  )
}
