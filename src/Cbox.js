import React,{Component} from 'react';


class Cbox extends Component{
    constructor(){
        super()
        this.state={

        }
    }

        render(){
    return(
        <div style={{color:this.props.color}}>{this.props.content}
        </div>
    )
}
}

export default Cbox