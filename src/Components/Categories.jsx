import axios from "axios";
import { useState } from "react";
import Error from "./Error";
import CategoryInfo from "./CategoryInfo";
// import IsLoaded from "../Components/IsLoaded";



function Categories(props){
    
    let [categoryList, setcategoryList] = useState([])
    let [error, setError] = useState(null)
    // let [isLoaded, setIsLoaded] = useState(false);
    let [th, setTh] = useState([])

    function handleClick(e){
        e.stopPropagation()
        axios.get("https://swapi.dev/api/"`${e.target.textContent}`)
        .then((response) => {
            let toArr = Object.values(response.data.results).map(obj => Object.values(obj))
            th = Object.values(response.data.results).map(obj => Object.keys(obj))[0]  
            setcategoryList(toArr)
            setTh(th)
            // setIsLoaded(true)
        })
        .catch(error =>{
            setError(error)
        })
    }
    if (error) return <Error errorMessage={error.message}/>
    // if (!isLoaded) return <IsLoaded/>
    if (categoryList.length > 0) return <CategoryInfo tHeader={th} cells={categoryList}/>
    return <div className="container row gy-4" onClick={handleClick}>{props.name}</div>
}

export default Categories
