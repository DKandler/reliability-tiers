import React from 'react';
import firebaseConfig from './firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Select from 'react-select';
import '../searchbar.css'

const options = [];
var db = firebase.firestore();
var NBARef = db.collection("NBASources");

NBARef.get().then((data) => {
    data.forEach((doc) => {
        options.push({label: doc.data().name, value: doc.data().name})
    })
})

class NBASearchbar extends React.Component {
    constructor(props){
    super(props);
        this.state={
                sources: [],
            };
        }
        handleChange = selectedOption => {
            this.setState({ selectedOption });
            console.log(`Option selected:`, selectedOption);
          };
          render() {    
            const { selectedOption } = this.state;
         
            return (
                <div >
              <Select 
                className = "searchbar"   
                placeholder = 'Search for a source...'
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
              </div>
            );
        }

     
}

export default NBASearchbar;
