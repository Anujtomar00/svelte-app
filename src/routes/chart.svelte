<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";

    let myLineChart;
    let myBarChart;

    onMount(() => {
        const ctx = document.getElementById("myLineChart").getContext("2d");
        const ctxBar = document.getElementById("myBarChart").getContext("2d");
        // updateChartDimensions();

        myLineChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "Interns Hire",
                        data: [0, 10, 5, 2, 20, 30, 45],
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                    },
                ],
            },
            options: {},
        });
        myLineChart = new Chart(ctxBar, {
            type: "bar",
            data: {
                labels: [
                    "Anuj",
                    "Devansh",
                    "Paras",
                    "Rahul",
                    "Abhishek",
                    "Shubham",
                    "Raj",
                ],
                datasets: [
                    {
                        label: "Assignment score",
                        data: [50, 10, 5, 2, 20, 30, 45],
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                    },
                ],
            },
            options: {},
        });
    });
</script>
<div>

<div style="width:400px">
    <canvas id="myLineChart"  
    />
</div>
<div style="width:400px; height:400px">
    <canvas id="myBarChart" 
    />
</div>
</div>
<!-- <div >
    <canvas id="myLineChart"  />
</div> -->

<style>
    #myLineChart{
        width: 100rem;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div.div{
        height: 69%;
        width: 600px;
    }
</style>
