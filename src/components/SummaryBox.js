import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";

function SummaryBox( props ){
    const { chartData } = props;

    var bankValue = chartData.datasets[0]["data"].slice(-1)[0];
    var investValue = chartData.datasets[1]["data"].slice(-1)[0];

    function handleLearnMore(){

        return(
            alert("Go to Learn More Page")
        );
    }

    return (
        <div>
        <Container fluid="md">
            <Row>
                <Col>{"£"+Math.round(bankValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Col>
                <Col>{"£"+Math.round(investValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Col>
            </Row>
            <Row>
                <Col>You can Save Loads With us!</Col>
            </Row>
            <Row>
                <Button onClick={handleLearnMore}>Get your personalised plan</Button>
            </Row>
        </Container>
        </div>
    );
}

export default SummaryBox;