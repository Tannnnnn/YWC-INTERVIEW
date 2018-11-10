import React, { Component } from 'react'

export class Movie extends Component {
  render() {
    const { movieData } = this.props
    const data = () => {
      let b
      if (movieData.length !== 0 ) {
        b = movieData.map( (e , i) => {          
          return(
            <div className="column is-half" key={i}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={`https://image.tmdb.org/t/p/w500_and_h282_face${e.backdrop_path}`} size="63px"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left" style={{ marginTop : '-4px' , fontWeight : '500'}}>
                        <center>
                          <i className="far fa-star" style={{color : ''}} title="Average Rating"/>
                        </center>
                        <span>
                          <a style={{ color : "red"}}>{e.vote_average}</a>/10
                        </span>
                    </div>
                    <div className="media-content" style={{ paddingLeft : '10px', marginTop : '-5px' , fontWeight : '500'}}>
                      <i className="fas fa-users" title="All ratings"/><br/>
                      <span>
                        <a style={{ color : "blue"}}>{e.vote_count}</a>
                      </span>
                    </div>
                    <div className="media-content" style={{ paddingLeft : '10px' , marginTop : '-3px'}}>
                      <p className="title is-6">{e.original_title}</p>
                      <p className="subtitle is-6">Release Date : {e.release_date}</p>
                    </div>
                  </div>
                  <div className="content">
                    {e.overview}
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      return b
    }
    
    return (
      <div>
        <div className="columns is-multiline is-mobile">
          {data()}
        </div>
      </div>
    )
  }
}

export default Movie
