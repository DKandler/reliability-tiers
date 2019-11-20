import React from 'react';
import '../../tiers.css'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Window from '../modal'

class SoccerTier4 extends React.Component {
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
                <a className = 'tierItem' target="_blank"><Window name={source.name} twitter={source.twitter} tier = '4' score={(source.score / source.votes).toFixed(2)}/></a>
            </li>
            );
          });
      
          return (
            <div className = 'tierContainer'>
            <h1 className = 'tierTitle'>Tier 4</h1>
            <ul className = "tiers">
              {sources}
            </ul>
          </div>  
          );
        }
      

  componentDidMount() { 
  
      this.db.collection("SoccerSources").where("score", "==" , 2).get().then((data) => {
          var sources = []
          data.forEach((doc) => {
              sources.push(doc.data())
          })
          this.setState({ sources: sources })
      })
    
  }

 
}


export default SoccerTier4;