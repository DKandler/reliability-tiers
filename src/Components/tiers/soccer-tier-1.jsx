import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import firebaseConfig from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

class SoccerTier1 extends React.Component {
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
  
      this.db.collection("SoccerSources").where("score", "==" , 5).get().then((data) => {
          var sources = []
          data.forEach((doc) => {
              sources.push(doc.data())
          })
          this.setState({ sources: sources })
      })
    
  }

 
}


export default SoccerTier1;