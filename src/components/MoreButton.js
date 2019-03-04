import React, {Component} from "react";

class MoreButton extends Component{
    render(){
        return(
            <div className="nav-bar">
                <button className="more-films-button">
                    <a href="https://www.imdb.com/calendar/?region=gb">Click here for more...</a>
                </button>
            </div>
        )
    }
}
export default MoreButton;