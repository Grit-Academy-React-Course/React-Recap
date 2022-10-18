import React from "react";

export default class Form extends React.Component {
    inputDepositAmount = 0;
    total = 0;
    getDespoitAmount = (e) => {
        this.inputDepositAmount = parseInt(e.target.value);
    }

    onSubmitHandel = (e) => {
        e.preventDefault();
        this.total = this.total + this.inputDepositAmount;
        this.props.getTotalNumber(this.total);
    }
    render() {
        return (
            <form className="myForm" onSubmit={this.onSubmitHandel}>
                {console.log(this.props)}
                <input
                    placeholder="desposit amount:"
                    type="number"
                    onChange={this.getDespoitAmount} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

//export default Form;