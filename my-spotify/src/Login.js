
import { loginUrl } from "./spotify";
import React from "react";
import "./Login.css"
function Login(){


    return(
        <div className="login">
          <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
{/* ...... */}

<a href={loginUrl}>LOGIN WITH SPOTIFY</a>

{/* sptify_logo */}
   {/* login with button of spotify */}
 
        </div>
    )
}

export default Login