import { useContext } from "react"
import { UserContext } from "@/context/UserContext"
export default function UserData(){

    const UserData = useContext(UserContext)
    console.log(UserData)

    return(
       <>
            {UserData.user}
       </>
    )
}