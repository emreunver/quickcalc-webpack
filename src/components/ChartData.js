import * as React from 'react';
function CalcChartData( monthlyIncome, monthlyOutgoings){

    var startMonth   = 1
    var endMonth     = 240

    const fractionInvestCash = 1
    const savingsAnnualRatePct = 0
    const investmentAnnualRatePct = 12

    var monthlySavings = monthlyIncome-monthlyOutgoings
    var monthlyInvestment = monthlySavings*fractionInvestCash
    var monthlyCash = monthlySavings-monthlyInvestment

    var savingsInterestStep = monthlySavings*(savingsAnnualRatePct/100)/12
    var investmentInterestStep = monthlyInvestment*(investmentAnnualRatePct/100)/12
    var cashInterestStep = monthlyCash*(savingsAnnualRatePct/100)/12

    var totalSavings = 0
    var totalSavingsInterest = 0
    var totalInvestmentInterest = 0
    var totalCashInterest = 0

    var xValues     = []
    var bankData    = []
    var investData  = []

    for (var month = startMonth; month <= endMonth; month++) {

        totalSavings = totalSavings + monthlySavings

        for (var i = month; i > 0; i--) {
            totalSavingsInterest = totalSavingsInterest + savingsInterestStep
            totalInvestmentInterest = totalInvestmentInterest + investmentInterestStep
            totalCashInterest = totalCashInterest + cashInterestStep
        }
        xValues.push(month)
        bankData.push(totalSavings + totalSavingsInterest )
        investData.push( totalSavings + totalInvestmentInterest + totalCashInterest )

    }

    const chartData ={
        labels  : xValues,
        datasets:[
            {
                label: "bank",
                data:  bankData,
                borderColor: "red",
                backgroundColor: "red",
                pointRadius:0,
                fill: false
            },
            {
                label: "invest",
                data:  investData,
                borderColor: "blue",
                backgroundColor: "blue",
                pointRadius:0,
                fill: false

            }
            ]
    }
    return(
        chartData
    );
}




/*
//// Bar Chart //////

function CalcChartData( monthlyIncome, monthlyOutgoings){

    var startMonth   = 1
    var endMonth     = 240

    const fractionInvestCash = 1
    const savingsAnnualRatePct = 0
    const investmentAnnualRatePct = 12

    var monthlySavings = monthlyIncome-monthlyOutgoings
    var monthlyInvestment = monthlySavings*fractionInvestCash
    var monthlyCash = monthlySavings-monthlyInvestment

    var savingsInterestStep = monthlySavings*(savingsAnnualRatePct/100)/12
    var investmentInterestStep = monthlyInvestment*(investmentAnnualRatePct/100)/12
    var cashInterestStep = monthlyCash*(savingsAnnualRatePct/100)/12

    var totalSavings = 0
    var totalSavingsInterest = 0
    var totalInvestmentInterest = 0
    var totalCashInterest = 0

    var bankData    = []
    var investData  = []

    for (var month = startMonth; month <= endMonth; month++) {

        totalSavings = totalSavings + monthlySavings

        for( var i= month; i>0; i--){
            totalSavingsInterest  = totalSavingsInterest + savingsInterestStep
            totalInvestmentInterest = totalInvestmentInterest + investmentInterestStep
            totalCashInterest = totalCashInterest + cashInterestStep
        }

    }

    console.log(totalInvestmentInterest,totalCashInterest)
    bankData= totalSavings + totalSavingsInterest
    investData= totalSavings + totalInvestmentInterest + totalCashInterest

    const chartData = {
        labels: ['Bank', 'Invest'],
        datasets: [
            {
                label:"",
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [bankData,investData]
            }
        ]
    };





    return(
        chartData
    )

}
*/


export default CalcChartData