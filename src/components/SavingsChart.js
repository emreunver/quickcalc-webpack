import React, { useState, useEffect } from 'react';
import Line from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'


function SavingsChart( props ){

    const { chartData } = props

    return(
        <Line data = {chartData}
              options ={{
                  scales:{
                      yAxes:[{
                          ticks: {
                              beginAtZero:true,
                              userCallback: function(value, index, values) {
                                  return "£"+value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                              }
                          },
                          gridLines:{display: false,drawBorder:true}
                      }],
                      xAxes:[{
                          gridLines:{display: false, drawBorder:true},
                          // type:"time",
                          // time:{unit:"month"}
                      }]

                  },
                  tooltips:  {enabled: false},
                  plugins : {datalabels:{display:false}},
                  legend : { onClick: function (e) {
                                e.stopPropagation()
                      }
                      }


              }}
        />




/*
        <Bar data = {chartData}
             options= {{
                 scales:    {   yAxes: [{ ticks: {beginAtZero: true,display:false},
                                          gridLines:{display: false},
                                        }],
                                xAxes: [{gridLines:{display: false}}]
                            },
                 legend:    {display: false},
                 tooltips:  {enabled: false},
                 plugins: { datalabels: {
                         display: true, color: 'black', anchor: "end", align: "top",
                         formatter: function (value, context) {
                             return  "£"+Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                         }
                     }}

             }}
        />

*/

);
}


export default SavingsChart;
