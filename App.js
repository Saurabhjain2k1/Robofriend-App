import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { Robot } from './Robot';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            Robot: [],
            searchfield: ''

        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => {

            return Response.json();

        })
            .then(users => {
                this.setState({ Robot: users })
            });
    }



    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    render() {
        const filterrobots = this.state.Robot.filter(Robot => {
            return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.Robot.length === 0){
            return <h1>Loading</h1>
        }else{
        return (
            <div className='tc'>
                <h1 id="robo" className='f1'>RoboFriends</h1>
                <SearchBox Searchchange={this.onSearchChange} />
                <Scroll> 
                <CardList Robot={filterrobots} />
                </Scroll>
            </div>

        );
    }
}
}
export default App;