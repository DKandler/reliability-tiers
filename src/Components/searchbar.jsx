import React from 'react';
import firebaseConfig from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Select } from 'react-select';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sources: [],
        };

        this.db = firebase.firestore(); 
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption })
        // code to make something happen after selecting an option
       }

    render(){
    return(
        <div>
        <Select 
            value={selectedOption}
            options={searchList}
            onChange={this.handleChange}
            placeholder= "Search..."
            openMenuOnClick={false}>
            
        </Select>
        </div>
    
    )
    }
       
        

    componentDidMount() { 
    
        this.db.collection("NBASources").get().then((data) => {
            var sources = []
            data.forEach((doc) => {
                sources.push(doc.data())
            })
            this.setState({ sources: sources })
        })

        console.log(this.state)
  
}

}
export default Searchbar;
