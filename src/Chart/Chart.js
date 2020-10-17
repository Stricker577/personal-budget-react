import React, { useEffect, useState } from "react";
import ChartJS from 'react-chartjs-2';
import Axios from 'axios';

function Chart() {
    let [setCategories] = useState([]);
    useEffect(() => {
        Axios
            .get("http://localhost:3000/server.js")
            .then(response => setCategories(response.data));
    })
    var dataSource = {
        datasets: [
            {
                data: [30,350,90],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6843',
                    '#36a2eb',
                    '#6bc7d1',
                    '#a9eb46',
                    '#58d1a9',
                    '#773cba',
                ],
            }
        ],
        labels : [
            'Eat out',
            'Rent',
            'Groceries'
        ]
    };

    function createChart(){
        var ctx = document.getElementById("myChart").getContext("2d");
        // eslint-disable-next-line no-unused-vars
        var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });


    function getBudget() {
        Axios.get('src/exeJson.json')
        .then(function (res) {
            console.log(res.data);
            for(var i = 0; i < res.data.myBudget.length; i++) {
                dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                dataSource.labels[i] = res.data.myBudget[i].title;
            }
            createChart();
        }
        )};
    getBudget();
    }

    return(
        <div className="App">
              <article className="canvas-container">
                <ChartJS data={dataSource}/>
              </article>
        </div>
    );
}

export default Chart;