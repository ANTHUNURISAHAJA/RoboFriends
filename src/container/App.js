import React , { Component } from 'react'
import CardList from'../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'
import 'tachyons';

class App extends Component
{
	constructor(){
		super();
		this.state = {
	       robots: [],
	       searchvalue: ''
		}
	}

	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
    }

	onSearchChange = (event)=>{
       this.setState({searchvalue:event.target.value});
       
	}
	render()
	{
		const { robots,searchvalue } = this.state;
		const filteredRobos = robots.filter(robot =>{
       	return robot.name.toLowerCase().includes(searchvalue.toLowerCase())})
       	return !robots.length ? 
       	<h1> Loading... </h1> :
		(
		   <div className = 'tc'>
           <h1> Robo Friends </h1>
           <SearchBox SearchChange={this.onSearchChange}/>
           <Scroll>
             <ErrorBoundary>
                <CardList  robots = {filteredRobos} />
             </ErrorBoundary>  
           </Scroll>
           </div>
		);
	}
}

export default App;