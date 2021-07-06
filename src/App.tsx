import React from 'react';
import './App.module.css';
import styles from './App.module.css'
import Routes from './components/common/routes/routes';
import Header from './components/header/header';

function App() {
    return (
        <div className={styles.wrapper}>



            <Header/>

            <Routes/>


        </div>
    );
}

export default App;


//
// <h2>APP COMPONENT</h2>
//
// <div className={styles.navlinks}>
//
//
//
//
// </div>
//
//
// <h3>here's common components:</h3>
// 1: <Button/>
// <div></div>
// 2: <Input/>
// <div></div>
// 3: <Checkbox/>
