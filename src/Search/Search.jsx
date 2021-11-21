import axios from "axios";
import { useState } from "react";
import Error from "../Components/Error";
import Nav from "../Template/Nav";
import SearchMain from "../Components/SearchMain";
// import $ from 'jquery';




function Search(){

  let [inputId, setInputId] = useState([])
  let [error, setError] = useState(null)
  let [th, setTh] = useState([])
  // let [isLoaded, setIsLoaded] = useState(false)


  let inputValue = function handleChange(e){
    if(e.target.value !== "")
    axios.get("https://swapi.dev/api/people/"+ e.target.value)
    .then(response => {
      console.log(response)
      setTh(Object.keys(response.data))
      setInputId(Object.values(response.data))
      // setIsLoaded(true)
    })
    .catch(error => setError(error))
  }

    if(error) return <Error errorMessage={error.message}/>
    return (
    <>
    <Nav/>
    <main className="container d-flex flex-column align-items-center">
    <SearchMain inputValue={inputValue} th={th} td={inputId}/>
    </main>
    </> );
}

export default Search



// if(loaded) $(function(){
//   //   $("table").each(function(elem,index){
//   //   var arr = $.makeArray($("tr",this).detach());
//   //   arr.reverse();
//   //     $(this).append(arr);
//   //     // return $("table")
//   //   // var test = $("test")
//   //   // return console.log("test");
//   // });
//   return console.log("test")
// });


// $(function(){
//   $("tbody").each(function(elem,index){
//     var arr = $.makeArray($("tr",this).detach());
//     arr.reverse();
//       $(this).append(arr);
//   });
// });
