import React, { useState, useEffect } from 'react';
import {Form,Button,Col} from "react-bootstrap"

function DataInput( props ){
    const { monthlyIncome,
            setMonthlyIncome,
            monthlyOutgoings,
            setMonthlyOutgoings,
            showResult,
            setShowResult,
            chartClicks,
            setChartClicks
        } = props
            
    const [tempIncome, setTempIncome] = useState(monthlyIncome || 0);
    const [tempOutgoings, setTempOutgoings] = useState(monthlyOutgoings || 0);

    function handleIncomeChange( e ){
        var num = e.target.value;
        setTempIncome(num);
    }

    function handleOutgoingsChange( e ){
        var num = e.target.value;
        setTempOutgoings(num);
    }

    function handleSubmit( ){
        setMonthlyIncome(tempIncome);
        setMonthlyOutgoings(tempOutgoings);
        setChartClicks( chartClicks+1);
    }

    return(
        <div>
            <Form>
                <Form.Row className="d-flex align-items-end">
                    <Form.Group as={Col} controlId="formIncome">
                        <Form.Label>Monthly Income</Form.Label>
                        <Form.Control type="number" value={tempIncome} onChange={handleIncomeChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formOutgoings">
                        <Form.Label>Monthly Outgoings</Form.Label>
                        <Form.Control type="number" value={tempOutgoings} onChange={handleOutgoingsChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formSubmit">
                        <Button onClick={handleSubmit}>Submit</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    )
}

export default DataInput