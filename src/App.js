import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';
import { NewsApiProvider } from './NewsApi';
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <NewsApiProvider>
      <News />
    </NewsApiProvider>
    
  )
}

export default App
