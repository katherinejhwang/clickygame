import React from "react";

const style = {
    header: {
        background: "purple",
    },

    h2: {
        fontSize: "20px",
        fontFamily: "Arial",
        color: "white",
    }
}

function Header() {
    return (
        <nav style={style.header} className="navbar">
            <div className="row">
            <div className="col-4">
            <div style={style.h2}>Clicky Game</div>
            </div>
            <div className="col-4">
            <div style={style.h2}>Click an image to begin!</div>
            </div>
            <div className="col-4">
            <div style={style.h2}>Score: 0 | Top: 0 </div>
            </div>
            </div>
        </nav>
    );
};

export default Header;