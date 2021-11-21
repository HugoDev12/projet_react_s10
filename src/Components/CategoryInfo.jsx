import SwapiItems from "../Home/SwapiItems";
import { useState } from "react";


function CategoryInfo(props){

    let [btnClick, setBtnClick] = useState(false)

    function handleClick(){
        setBtnClick(true)
    }

    if (btnClick) return <SwapiItems/>
    return (
    <main>
        <div className="container table-responsive">
            <table className="table table-dark tabled-striped">
                <thead>
                    <tr>
                        {props.tHeader.map((tHeader, key)  => <th key={key} className="col text-center">{tHeader}</th>)}
                    </tr>
                </thead>
                <tbody>
                {props.cells.map((subArr, key) =>
                    <tr key={key}>
                        {subArr.map((values, key)  =>
                            <td key ={key} className="text-center cells">{values}</td>)}
                    </tr>)
                }
                </tbody>
            </table>
        </div> 
        <button className="btn, btn-secondary" onClick={handleClick}>Retour</button>
    </main>
    )
}

export default CategoryInfo
