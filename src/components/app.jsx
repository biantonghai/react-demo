import { Component } from "react";
import logo from '../logo.svg'
import './app.css'

export default class App extends Component {
    render() {
        return (
            <div>

                <img className='logo' src={logo} alt='logo'/>
                <p className='title'>这是一个组件</p>
            </div>
        )
    }
}