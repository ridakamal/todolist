import React from 'react'

const Page = ({title, subtitle}) => {
    return (
        <div>
            <h1> {title} </h1>
            <h2 style= {{ fontStyle: "italic" }}> {subtitle} </h2>
        </div>
    )
}

export default Page;
