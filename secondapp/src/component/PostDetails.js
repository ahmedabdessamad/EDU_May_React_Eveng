import React, {Component} from 'react';

class PostDetail extends Component {
    constructor(props){
        super(props)
        console.log(">>>>>>>",props)
        this.state = {
            title : this.props.match.params.id
        }
    }
    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>Post Detail Page</h3>
                </div>
                <div className="panel-body">
                    <h1>Details Page for {this.state.title}</h1>
                    <p> Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen 
                        book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, 
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen 
                        book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, 
                    </p>
                </div>
            </div>
        )
    }
}


export default PostDetail;