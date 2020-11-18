import React from "react";

export default function GalleryObject(props) {
    return <a href={`${props.url}`}> {props.name} </a>;
}
