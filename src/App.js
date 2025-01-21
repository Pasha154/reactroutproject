import {ThemeProvider} from "./context/ThemeContext";
import {Routes, Route} from "react-router-dom";
import Layout from "./component/Header/Layout";


import Home from "./component/Header/Home"
import Contacts from "./component/Header/Contacts"
import AboutMe from "./component/Header/AboutMe"
import {Formik} from "formik";
import FormFormik from "./pages/Formik/FormFormik";
import Counter from "./pages/Counter/Counter";
import {store} from "./store_todo";

function App(){
    return(
        <ThemeProvider>
            <Routes>
                <Route path = '/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path = '/contacts' element={<Contacts />} />
                    <Route path = '/form' element={<FormFormik />} />
                    <Route path = '/counter' element={<Counter />} />
                    <Route path = '/aboutme' element={<AboutMe />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App
