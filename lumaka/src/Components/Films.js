import React, { Component } from 'react';

class Films extends Component {

    state = {
        data:[]
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(result => result.json())
        .then(dataJson => this.setState({data: dataJson}))
    }


render() {


    return (
        <div>
            <div>
                {this.state.data.slice(0, 33).map((e) => (
                    <img src={e.thumbnailUrl} />
                )
                )}    
            </div>
            
        </div>    
        );
    }
}

export default Films;
