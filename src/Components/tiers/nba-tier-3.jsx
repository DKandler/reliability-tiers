import React from 'react';
import '../../tiers.css'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Window from '../modal'

class NBATier3 extends React.Component {
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
                  <a className = 'tierItem' target="_blank"><Window name={source.name} twitter={source.twitter} tier = '3' score={(source.score / source.votes).toFixed(2)}/></a>
                </li>
              );
            });
        
            return (
              <div className = 'tierContainer'>
              <h1 className = 'tierTitle'>Tier 3</h1>
              <ul className = "tiers">
                {sources}
              </ul>
            </div>  
            );
          }
        

    componentDidMount() { 
    
        this.db.collection("NBASources").where("score", "==" , 3).get().then((data) => {
            var sources = []
            data.forEach((doc) => {
                sources.push(doc.data())
            })
            this.setState({ sources: sources })
        })
      
    }

   
}


export default NBATier3;