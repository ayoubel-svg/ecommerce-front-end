import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleAuth = () => {
    const [user, setUser] = useState(null);

    const handleLogin = async (response) => {
        const { code } = response;

        // Send the code to your Laravel application to exchange for an access token and user information.
    };

    return (
        <div>
            <GoogleLogin
                clientId="1062110158428-2e7qaksagvsaqe7luv9rqo9sn17abe5h.apps.googleusercontent.com"
                onSuccess={handleLogin}
                onFailure={(error) => console.log(error)}
            />
        </div>
    );
};

export default GoogleAuth;
