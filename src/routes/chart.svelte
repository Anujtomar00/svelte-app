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
                        label: "My First Dataset",
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
                        label: "My First Dataset",
                        data: [0, 10, 5, 2, 20, 30, 45],
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

<div >
    <canvas id="myLineChart"  
    style="margin-right: 6rem;"
    />
</div>
<div >
    <canvas id="myBarChart" 
 
    />
</div>
</div>
<!-- <div >
    <canvas id="myLineChart"  />
</div> -->

<style>
    div{
        display: flex;
        align-items: center;
    }
    div.div{
        height: 600px;
        width: 400px;
    }
</style>
