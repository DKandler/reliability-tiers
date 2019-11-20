import React from 'react';
import '../../tiers.css'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Window from '../modal'

class NBATier2 extends React.Component {
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
                <a className = 'tierItem' target="_blank"><Window name={source.name} tier = '2' twitter={source.twitter} score={(source.score / source.votes).toFixed(2)}/></a>
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
    
        this.db.collection("NBASources").where("score", "==" , 4).get().then((data) => {
            var sources = []
            data.forEach((doc) => {
                sources.push(doc.data())
            })
            this.setState({ sources: sources })
        })
      
    }

   
}


export default NBATier2;