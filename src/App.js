import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstBlock from "./components/firstBlock/firstBlock";
import SecondBlock from "./components/secondBlock/secondBlock";
import Users from "./components/users/users";
import FormBlock from "./components/form/formBlock";

class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <FirstBlock/>
                <SecondBlock/>
                <Users/>
                <FormBlock/>
            </>
        )
    }
}

export default App;
