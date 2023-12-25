import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Calculation = () => {
    const initialValue = { firstNumber: "", secondNumber: "" }

    const [formData, setFormData] = useState(initialValue);
    const [Calculator, setCalculator] = useState("");
    const [fieldSymbol, setFieldSymbol] = useState("")
    const [fieldEqual, setFieldEqual] = useState(false);
    const [error, setError] = useState("");
    const [bgColor , setBgColor] = useState("")

    useEffect(()=>{
        document.title="Calculator"
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const symbol = (data) => {
        let fieldS = "";
        
        if (data == 1) {
            fieldS = "+";
        } else if (data == 2) {
            fieldS = "-";
        } else if (data == 3) {
            fieldS = "*";
        } else {
            fieldS = "%";
        }
        setFieldSymbol(fieldS);
        setFieldEqual(true);
    }
     const inputFieldColor=(color)=>{
        let show ="";
        if(color == 1){
            show = "btn btn-primary"
        }else if(color ==2 ){
            show = "btn btn-secondary" 
        }else if(color == 3){
            show ="btn btn-success"
        }else{
            show="btn btn-info"
        }
        setBgColor(show)

     }

    setTimeout(function () {
        setError()
    }, 5000);

    const onAdd = (e) => {
        e.preventDefault();

        let results = {};

        if (!(Number(formData.firstNumber) && Number(formData.secondNumber))) {
            let errors = "Both the Numbers is required for calculation";
            setError(errors)
        } else {
            results = Number(formData.firstNumber) + Number(formData.secondNumber);
            setCalculator(results);
            symbol(1);
            inputFieldColor(1);
        }

    }

    const onSubtraction = (e) => {
        e.preventDefault();

        let results = {};

        if (Number(formData.firstNumber) < Number(formData.secondNumber)) {
            let errors = "First Number should greater then second Number"
            setError(errors)
        } else if (!(Number(formData.firstNumber) && Number(formData.secondNumber))) {
            let errors = "Both the Numbers is required for calculation";
            setError(errors)
        } else {
            results = Number(formData.firstNumber) - Number(formData.secondNumber);
            setCalculator(results);
            symbol(2);
            inputFieldColor(2);
        }
    }

    const onMultiplication = (e) => {
        e.preventDefault();

        let results = {};

        if (!(Number(formData.firstNumber) && Number(formData.secondNumber))) {
            let errors = "Both the Numbers is required for calculation";
            setError(errors)
        } else {
            results = Number(formData.firstNumber) * Number(formData.secondNumber);
            setCalculator(results);
            symbol(3);
            inputFieldColor(3);
        }

    }
    const onDivision = (e) => {
        e.preventDefault();

        let results = {};
        if (Number(formData.firstNumber) < Number(formData.secondNumber)) {
            let errors = "First Number should greater then second Number"
            setError(errors)
        } else if (!(Number(formData.firstNumber) && Number(formData.secondNumber))) {
            let errors = "Both the Numbers is required for calculation";
            setError(errors)
        } else {
            results = Number(formData.firstNumber) / Number(formData.secondNumber);
            setCalculator(results);
            symbol(4);
            inputFieldColor(4);
        }
    }
    return (

        <div className="outer-border shadow p-3 mb-5 bg-white rounded">
            <h1 className="container text-center mb-5" style={{ textDecoration: "underline" }} >Calculation page</h1>

            <div className="form-group row inputField mb-3">
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="inputPassword" placeholder='Enter Frist Number' onChange={handleChange} name="firstNumber" value={formData.firstNumber} />
                </div>
                <div className="col-sm-1">{fieldSymbol}</div>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="inputPassword" placeholder='Enter Second Number' onChange={handleChange} name="secondNumber" value={formData.secondNumber} />
                </div>
                <div className="col-sm-1">{fieldEqual ? "=" : ""}</div>

                <div className="col-sm-3">
                    <input type="text" className={bgColor} id="form-control" placeholder='Result' value={Calculator} disabled />
                </div>
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3 m-3" onClick={onAdd}>Add</button>
                <button type="submit" className="btn btn-secondary mb-3 m-3" onClick={onSubtraction}>Subtraction</button>
                <button type="submit" className="btn btn-success mb-3 m-3" onClick={onMultiplication}>Multiplication</button>
                <button type="submit" className="btn btn-info mb-3 m-3" onClick={onDivision}>Division</button>
            </div>

        </div>
    );
};

export default Calculation;