import axios from "axios";
import { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import Error from "../Components/Error";
import IsLoaded from "../Components/IsLoaded";
import './SwapiItems.css'


function SwapiItems(){

    let [swapiItems, setSwapiItems] = useState([])
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect (()=> 
        axios.get("https://swapi.dev/api/")
        .then((response) => {
            setSwapiItems(Object.keys(response.data))
            setIsLoaded(true)
        })
        .catch(error => setError(error))
    ,[] )

    if (error) return <Error errorMessage={error.message}/>
    if (!isLoaded) return <IsLoaded/>
    

    let category = swapiItems.map((item, key) => 
        <section  key={key} className="category">
            <h3 className="col-12 py-3 my-1 text-center category">{item}</h3>
        </section>
        )


    return <>
    <Categories name={category}/>
    </>
}

export default SwapiItems;


