import React from 'react'

const Page = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            <h2 style= {{ fontStyle: "italic" }}> {props.subtitle} </h2>
        </div>
    )
}

export default Page;
