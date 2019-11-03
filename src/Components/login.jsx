import React from 'react';

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
                            ? <p className = "signInText">Hello, {user.displayName}</p>
                            : <p className = "signInText">Please sign in.</p>
                    }
                    {
                        user
                            ? <button className = "signOut"  onClick={signOut}>Sign out</button>
                            : <img className = "signIn" onClick={signInWithGoogle} src="../google.png"></img>
                    }
                </header>
            </div>
        );
    }
};

export default Login