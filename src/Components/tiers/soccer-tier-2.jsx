import React from 'react';
import '../../tiers.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import firebaseConfig from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

class SoccerTier2 extends React.Component {
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
                <a href={source.twitter} target="_blank">{source.name},</a>
              </li>
            );
          });
      
          return (
            <div className = 'tierContainer'>
              <h1 className = 'tierTitle'>Tier 2</h1>
              <ul className = "tiers">
                {sources}
              </ul>
          </div>  
          );
        }
      

  componentDidMount() { 
  
      this.db.collection("SoccerSources").where("score", "==" , 4).get().then((data) => {
          var sources = []
          data.forEach((doc) => {
              sources.push(doc.data())
          })
          this.setState({ sources: sources })
      })
    
  }

 
}


export default SoccerTier2;