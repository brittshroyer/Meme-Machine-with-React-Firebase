import React, {Component} from 'react';

class Meme extends Component{
  render() {
    return <img className="meme" src={ this.props.memeObject.url } alt="" />
    
  }
}

export default Meme;
