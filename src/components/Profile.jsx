import { useNavigate } from "react-router-dom"

export default function Profile(){
    let navigate = useNavigate();
    return(
      <>
      <h1> Profile</h1>
      <button onClick={() => navigate("/home")}>Go to Home</button>
      </>
    )
     
  }