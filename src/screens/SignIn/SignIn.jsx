import React from 'react'


function SignIn({signInWithGoogle}) {


  return (
    <div>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export {SignIn}