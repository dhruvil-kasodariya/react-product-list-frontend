import React, { useState } from 'react'
import SignUp from '../componets/SignUp'
import SignIn from '../componets/SignIn';

function Auth() {
  const [switchButton,setSwitchButton]=useState(true);

  const handleSwitch=()=>{
    setSwitchButton(!switchButton)
  }
  
  return (
    <div>
      {switchButton ?  <SignUp handleSwitch={handleSwitch}/>:<SignIn handleSwitch={handleSwitch}/>}
     
    </div>
  )
}

export default Auth