import React, { Fragment } from "react";
import Form from "./components/form/Form";

//const myName = "Björn";

class App extends React.Component {
  myName = <h1>Alex</h1>
  welcomeMessage = <div>Hello {this.myName}</div>
  total = 0;
  displayMyName = () => this.myName;
  /*   displayMyName = () => {
        return (
          this.myName
        )
      } */


  //Map Iterator vs Map data Structre
  mapIterator = () => {
    const cars = ["Volvo", "BMW", "Ford", "Saab"];
    const carsObj = { name: "Volvo", color: "Red" };
    return (
      <ul>
        {
          cars.map((value, index) => {
            return (
              <li key={index}>
                <h1>{value}</h1>
              </li>
            )
          })
        }
      </ul>
    )
  }

  mapDataStructure = () => {
    const carsObj = { name: "Volvo", color: "Red", owner: "Omar" };
    const array = new Map()
    array.set(carsObj.owner, carsObj)
    array.set(carsObj.color, carsObj)
    array.set(carsObj.name, carsObj)
    console.log(array);
    if (array.has(carsObj.owner)) {
      //alert("Already exists");
    } else {
      //Add 
    }
    console.log([...array]);
    return (
      [...array].map((value, index) => {
        return (
          <div key={index}>{value[1].owner}</div>
        )
      })
    )
  }
  getTotalNumber = (total) => {
    //console.log(total);
    if (localStorage.getItem("total")) {
      localStorage.setItem("total", parseInt(localStorage.getItem("total")) + total)
    } else {
      localStorage.setItem("total",total)
    }
    window.location.reload()
  }

  render() {
    const item = localStorage.getItem("total") ? localStorage.getItem("total") : 0;
    return (
      <Fragment>
        <Fragment>
          <h1>{item}</h1>
          <Form hello="hello" notCool="agree" getTotalNumber={this.getTotalNumber} />
          {/* this.myName */}
          {/* this.welcomeMessage */}
          {/* this.displayMyName() */}
          {/* this.mapIterator() */}
          {/* this.mapDataStructure() */}
        </Fragment>
        <div></div>
      </Fragment>
    )
  }
}

export default App;