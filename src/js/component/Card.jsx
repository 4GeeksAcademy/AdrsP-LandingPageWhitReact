import React from "react";


const Card = (props) => {
    return (
        <div className="card p-3" style={{width:"18rem"}}>
            <img src={props.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    );
};

export default Card;