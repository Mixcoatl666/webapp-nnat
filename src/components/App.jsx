import NavBar from './NavBar';

function App() {
    return (
        <>
        <NavBar />
        <div className="container mt-4">
            <div className="p-5 mb-4 bg-primary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Bienvenido a mi página web</h1>
                    <p className="col-md-8 fs-4">
                        Esta simple Aplicación fue creada con React
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default App;