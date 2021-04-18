import {Container, Row, Col, Button} from "react-bootstrap";

import SavingsChart from "./SavingsChart";
import SummaryBox from "./SummaryBox";

function Result( props ){
    const { chartData,monthlyIncome, monthlyOutgoings } = props

    function handleSaveMore(){
        alert("let us help you save more")
    }

    if (monthlyIncome>monthlyOutgoings){
        return(
            <div>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <SavingsChart chartData={chartData}/>
                        </Col>
                        <Col>
                            <SummaryBox   chartData={chartData}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    else{
        return(
            <div>
                <Container fluid="md">
                    <Row>
                        <h1>Your Monthly Outgoings Exceed your income</h1>
                    </Row>
                    <Row>
                        <Button onClick={handleSaveMore}>Get your personalised plan</Button>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Result;