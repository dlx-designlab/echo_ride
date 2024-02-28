import VotePage from './Components/VotePage';
import './App.css';
import React from 'react';
import {ECategory} from "./Types/ECategory";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MenuPage from "./Components/MenuPage";
import ResultsAvgPage from "./Components/ResultsAvgPage";
import FinishPage from "./Components/FinishPage";
import ResultsBubblesPage from "./Components/ResultsBubblesPage";


const App = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<MenuPage/>}/>
                            <Route path="/finish" element={<FinishPage/>}/>
                            <Route path="/results" element={<ResultsAvgPage />}/>
                            <Route path="/bubblesResults" element={<ResultsBubblesPage />}/>
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
