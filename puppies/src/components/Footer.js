import React from "react";

const style = {
    backgroundFooter: {
        background: "blue",
        width: "100%",
        height: "100px",
        position: "absolute",
        bottom: "0",

    },

    footer: {
        background: "purple",
        position: "absolute",
        bottom: "0",
        width: "100%",
    },

    h2: {
        fontSize: "20px",
        fontFamily: "Arial",
        color: "white",
    }
}

function Footer() {
    return (
        <footer style={style.backgroundFooter} className="footer">
        <footer style={style.footer} className="page-footer">
            <div class="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
            </footer>
            </footer>
    );
};

export default Footer;