import React from "react";
import Navbar from "../../components/Navbar";

export default function StoreDetails(props) {
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        let id = props.match.params.id;

        fetch(`https://frontend-06-2021-default-rtdb.firebaseio.com/stores/${id}.json`)
            .then(response => response.json())
            .then(response => setData(response));
    }, []);

    return (
        <div>
            <Navbar/>
            <h1>Detalhes da loja</h1>
            <h2>{data.name}</h2>
        </div>
    );
}