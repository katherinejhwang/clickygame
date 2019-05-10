import React from "react";

const style = {
    top: {
        backgroundImg: "url(../../public/images/bluebackground.jpeg)",
    },

    h3: {
        fontSize: "20px",
        fontFamily: "Arial",
        color: "black",
    }
}

function Card(bananas) {
        return (
          <div className="card">
            <div className="img-container">
              <img
                alt={bananas.name}
                src={bananas.image}
              />
            </div>
            </div>
    );
};

export default Card;