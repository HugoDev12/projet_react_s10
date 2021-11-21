import './Template.css';

function Header(){
    return (
        <header className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center">Swapi</h1>
            <p className="text-center">L'API pour les fans de Star Wars</p>
        </header>
    )
}

export default Header