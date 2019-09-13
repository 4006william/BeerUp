import React, { Component} from 'react'


class Beers extends Component {

    state = {
        count: 0,
        beers:[]
    }
    componentDidMount(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(data =>{
            this.setState({beers: data})
        })
    }


    likeBeer = () => {
        this.setState({ count: this.state.count + 1})
    }
    
    
    render() {

        return(
            <div>

            {this.state.beers.map( d => {
                return (
                    <div class = "eachBeer">
                        <h3>{d.name}</h3>
                        <p>{d.description}</p>
                        <img class="eachBeerPic" src= {d.image_url} />
                        <span><button onClick={this.likeBeer}>Like</button>  
                        <h3 class="count">{this.state.count}</h3>
                        </span>
                    </div>
                )
            })
        }
            </div>
        )
    }
}
    


export default Beers