"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

const { data: session } = useSession()

if (!session) {
return (
<div style={{textAlign:"center", marginTop:"200px"}}>
<button onClick={() => signIn("google")}>
Login with Google </button> </div>
)
}

return (

```
<div style={{
  background:"white",
  color:"black",
  padding:"40px",
  width:"600px",
  margin:"50px auto",
  border:"1px solid black"
}}>

  <h1 style={{textAlign:"center"}}>
    Assignment Cover Page
  </h1>

  <hr/>

  <p><b>Name:</b> {session.user.name}</p>

  <p><b>Email:</b> {session.user.email}</p>

  <p><b>Course:</b> Web Engineering</p>

  <p><b>Assignment:</b> Google Login Assignment</p>

  <br/>

  <button onClick={() => signOut()}>
    Logout
  </button>

</div>
```

)

}
