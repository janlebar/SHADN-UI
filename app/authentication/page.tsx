import AuthenticationPage from "@/components/authentication/authentication"
import {Header} from "@/components/header"
import Headerswitch from "@/components/headerswitch"


export default function ContractorsPage() {
  return (
    <div>
      <Header/>
      <Headerswitch/>
      {/* <MailDisplay mail={null}/> */}
    <AuthenticationPage/>

    </div>
  )
}
