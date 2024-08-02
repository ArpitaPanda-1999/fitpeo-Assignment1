import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Design/Dashboard";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
