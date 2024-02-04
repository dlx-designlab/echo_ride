import VotePage from './Components/VotePage';
import './App.css';
import React, {useState, useEffect} from 'react';
import {ECategory} from "./Types/ECategory";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import MenuPage from "./Components/MenuPage";
import ResultsAvgPage from "./Components/ResultsAvgPage";
// import ip from "./ip"


const App = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<MenuPage/>}/>
                            <Route path="/results" element={<ResultsAvgPage />}/>
                            {ECategory.map((category) => {
                                return <Route path={`/${category}`} key={category}
                                              element={<VotePage category={category} />}/>
                            })}
                        </Routes>
                    </BrowserRouter>
                </header>
            </div>
        );
    };

    export default App;
