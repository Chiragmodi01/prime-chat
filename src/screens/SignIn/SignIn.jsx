import React from "react";
import { InboxPlaceholder } from "../../components";
import { Google, SignIn as LogIn } from "../../utils/styledIcons";

import "./SignIn.css";

function SignIn({signInWithGoogle }) {

	return (
		<div className="SignIn">
				<div className="signin-main-container">
					<Google className="logo-google" size={150} />
					<button className="btn-signin" onClick={signInWithGoogle}>
						Sign In with Google
						<LogIn className="login-logo" size={17} />
					</button>
				</div>
        
			<InboxPlaceholder />
		</div>
	);
}

export { SignIn };
