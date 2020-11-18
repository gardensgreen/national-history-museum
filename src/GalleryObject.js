import React from "react";

export default function GalleryObject(props) {
    return (
        <>
            <br />
            <span>Size: {props.size}</span>
            <br />
            <span>format: {props.format}</span>
            <br />
            <span>state: {props.state}</span>
            <br />
            <a href={`${props.url}`}> {props.name} </a>
            <br />
        </>
    );
}
