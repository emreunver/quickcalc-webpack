import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from "react-bootstrap";

import DataInput from "./DataInput";
import Result from "./Result";
import CalcChartData from "./ChartData";

function App() {
    const [monthlyIncome,setMonthlyIncome]      =  useState(3000)
    const [monthlyOutgoings,setMonthlyOutgoings]=  useState(2500)
    const [chartClicks,setChartClicks]          = useState(0)
    const [chartData,setChartData]              = useState(CalcChartData(monthlyIncome,monthlyOutgoings))

    useEffect(() => {
        var newChartData = CalcChartData(monthlyIncome,monthlyOutgoings)
        setChartData( newChartData )
    }, [chartClicks]);

    return (
    <div>
        <Container fluid="md">
            <Row>
                <Col>
                      <DataInput monthlyIncome          = {monthlyIncome}
                                 setMonthlyIncome       = {setMonthlyIncome}
                                 monthlyOutgoings       = {monthlyOutgoings}
                                 setMonthlyOutgoings    = {setMonthlyOutgoings}
                                 chartClicks            = {chartClicks}
                                 setChartClicks         = {setChartClicks}

                      />
                </Col>
            </Row>
            <Row>
                <Col>


                    { chartClicks>0 ? <Result chartData={chartData}
                                              monthlyIncome={monthlyIncome}
                                              monthlyOutgoings={monthlyOutgoings}
                                        /> : null }
                </Col>
            </Row>

        </Container>
    </div>
  );
}

export default App;
