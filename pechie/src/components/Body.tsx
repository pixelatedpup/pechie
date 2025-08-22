
import ScrollToTop from "./ScrollToTop";
import Home from "../components/pages/Home"
import { Routes, Route } from "react-router-dom";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
const Body = () =>{
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/works" element={<Works/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/info" element={<Info/>}></Route>

            </Routes>
        </>
    );
}

export default Body;