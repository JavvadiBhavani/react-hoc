import React, { Component } from "react";
const Hoc=(Component)=> {
    return(
        class extends React.Component{
            render(){
            return(
                <div>
                    <Component/>
                </div>
            )
        }
    }
    )
}
export default Hoc;