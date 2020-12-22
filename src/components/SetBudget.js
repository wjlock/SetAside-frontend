// 500 params for the set bugdet 

//box of amount with a drop down of catagoreries and other submit button and to list 

import React, { Component } from 'react';

class SetBudget extends Component {
    constructor(){
        super()
        this.state ={
            num1:0,
            // num2:0,
            math: "Choose",
            results: 0
        }
    }

    math = (e) => {
        const type = e.target.value
        this.setState({ math: type})
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    equals = () => {
        let results = parseInt(this.state.num1)
    //     let num1 = parseInt(this.state.num1)
    //     let num2 = parseInt(this.state.num2)
        
    //     if (this.state.math === "+"){
    //         this.setState({results: num1 + num2})
    //     }
    //     if (this.state.math === "-"){
    //         this.setState({results: num1 - num2})
    //     }
    //     if (this.state.math === "*"){
    //         this.setState({results: num1 * num2})
    //     }
    //     if (this.state.math === "/"){
    //         this.setState({results: num1 / num2})
    //     }
    //     if (this.state.math === "Choose"){
    //         this.setState({results: "Please Choose an Option"})
    //     }
    }

    render(){
        return(
            <div className="container">
                <h1>Set your budget</h1>

                <div className="add">
                    
                    <input type="number" name="num1" placeholder="Enter your first number" value={this.state.num1} onChange={ (e) => this.setNum(e, "num1")} />
                    
                    <form>
                        <label>
                            <select onChange={this.math}>
                                <option>Choose</option>
                                <option>Rent/Mortgage</option>
                                <option>Ultilities/ Bills </option>
                                <option>Food/Restuarants</option>
                                <option>Savings/Investing</option>
                            </select>
                        </label>
                    </form>                    
                    <button onClick={this.equals}>Submit</button>
                    
                    <h3>{this.state.results}</h3>
                
                </div>
            </div>
        )
    }
}

export default SetBudget;