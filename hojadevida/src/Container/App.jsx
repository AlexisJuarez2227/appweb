import {BrowserRouter, Routes, Route} from"react-router-dom"
import All from "../Pages/all";
function App() {
    return ( <BrowserRouter>
        <Routes>
            <Route path="/" element={<All/>} />
        </Routes>
    </BrowserRouter> );
}

export default App;