import React, { Component } from "react";
import Card from "../components/Card";
import puppy from "../components/images/p1.jpeg";

class Puppies extends Component {
    state = {
        puppy
    }

addPuppy = id => {
    const puppy = this.state.puppy.filter(puppy => puppy.id !==id);
    this.setState({ puppy });
}

render () {
    return (
        <div class="container">Puppies
        {this.state.puppy.map(puppy => (
            <Card
            key={puppy.id}
            image={puppy.image}
            />
        ))}
        </div>
    )
        }
        
    };

export default Puppies;