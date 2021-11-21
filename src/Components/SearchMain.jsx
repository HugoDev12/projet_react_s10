

function SearchMain(props){

    let content = props.td.map(cellsValue =>
       <td className="col-7 col-lg-9 text-md-center">{cellsValue}</td>
      )
  
    return (
        <>
            <div className="mt-3">
                <label htmlFor="ID">Recherche par ID :</label>
                <input type="text" name="ID" id="ID" onChange={props.inputValue} required/>
            </div>
            <div>
                <table className="table table-dark tabled-striped">
                <tbody>
                    {props.th.map((headers, key) =>
                        <tr key={key} className="row">
                            <td className="col-5 col-lg-3 text-center">{headers}</td>{content.shift()}
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        </>
    )   
}

export default SearchMain