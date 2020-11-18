import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GalleryNavigation from "./GalleryNavigation";
import GalleryView from "./GalleryView";

function App() {
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    `https://data.nhm.ac.uk/api/3/action/package_list`
                );
                if (!res.ok) throw res;
                const data = await res.json();
                const { result } = data;
                setGalleries(result.slice(0, 10));
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <BrowserRouter>
            <h1>Simple React App</h1>
            <GalleryNavigation galleries={galleries} />
            <Switch>
                <Route exact path="/">
                    <p>Informational splash message</p>
                </Route>
                <Route path="/gallery/:id" component={GalleryView} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
