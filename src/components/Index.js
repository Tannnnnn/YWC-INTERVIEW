import React, { Component } from 'react'
import axios from 'axios';
import Movie from './Movie'
// import styled from 'styled-components';

export class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieData : [] ,
      resultData : []
    }
  }

  componentDidMount(){
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=55e9e7fd17ff251e724c28e729a00ab2&language=en-US&page=1`
    axios.get(url)
    .then( res => {
      this.setState({ 
        movieData : res.data.results
      })
    })
    .catch( error => {
      console.log(error);
    })
  }

  render() {    
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = day + "/" + month + "/" + year;
   
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title" style={{ color : 'white'}}>
              <i className="fas fa-film"/>
                &nbsp;Now Showing <small>( {newdate} )</small>
              </h1>
              <hr /><br/>
              <Movie {...this.state}/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default index
