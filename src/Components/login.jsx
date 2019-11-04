import React from 'react';
import '../header.css'

class Login extends React.Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
       
        return (
            <div className="App">
                <header className="App-header">
                    {
                        user
                            ? <p className = "signInText">Hello, <strong>{user.displayName}</strong></p>
                            : <p className = "signInText">Please sign in.</p>
                    }
                    {
                        user
                            ? <button className = "signOut"  onClick={signOut}>Sign out</button>
                            : <button className = "signIn" onClick={signInWithGoogle} src="../google.png">Sign In</button>
                    }
                </header>
            </div>
        );
    }
};

export default Login