import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GalleryObject from "./GalleryObject";

export default function GalleryView() {
    const params = useParams();
    const [gallery, setGallery] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    `https://data.nhm.ac.uk/api/3/action/package_show?id=${params.id}`
                );

                if (!res.ok) {
                    throw res;
                }

                const data = await res.json();
                const { result } = data;

                setGallery(result);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [params]);
    return (
        <>
            <header>{gallery.title}</header>
            <span>{gallery.isOpen ? "open" : "closed"}</span>
            {gallery.resources &&
                gallery.resources.map((resource) => (
                    <GalleryObject key={resource.id} {...resource} />
                ))}
        </>
    );
}
