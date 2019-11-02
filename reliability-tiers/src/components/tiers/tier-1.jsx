import React from 'react';
import firebaseConfig from '../../firebase.js';
import * as firebase from 'firebase/app';

class Tier1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            sources: [],
        };
        this.db = firebase.firestore();     
    }

        render() {
            var sources = this.state.sources.map(function(source) {
              return (
                <li key="{source.name}">
                  <a href={source.twitter}>{source.name}</a>
                </li>
              );
            });
        
            return (
                <ul>
                  {sources}
                </ul>
            );
          }
        

    componentDidMount() { 
    
        this.db.collection("NBASources").where("score", "==" , 5).get().then((data) => {
            var sources = []
            data.forEach((doc) => {
                sources.push(doc.data())
            })
            this.setState({ sources: sources })
        })
      
    }

   
}


export default Tier1;