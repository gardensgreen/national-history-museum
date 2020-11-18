import { useState, useEffect } from "react";

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

    return <h1>Simple React App</h1>;
}

export default App;
