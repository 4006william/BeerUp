import React, { Component} from 'react'

class Beers extends Component {

    state = {
        beers:[]
    }
    componentDidMount(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(data =>{
            this.setState({beers: data})
        })
    }

    render() {

        return(
            <div>

            {this.state.beers.map( d => {
                return (
                    <div style={{ height: '50px'}}>
                        <h3>{d.name}</h3>
                        <p>{d.description}</p>
                        <img src= {d.image_url} />
                    </div>
                )
            })
        }
            </div>
        )
    }
    
}

export default Beers