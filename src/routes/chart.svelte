<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";

    let myLineChart;
    let myBarChart;
    let chartContainer;

    function createChart(ctx, type, labels, data, label) {
        return new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    tension: 0.1,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        });
    }

    onMount(() => {
        const ctxLine = document.getElementById("myLineChart").getContext("2d");
        const ctxBar = document.getElementById("myBarChart").getContext("2d");

        myLineChart = createChart(
            ctxLine,
            "line",
            ["January", "February", "March", "April", "May", "June", "July"],
            [0, 10, 5, 2, 20, 30, 45],
            "Interns Hire"
        );

        myBarChart = createChart(
            ctxBar,
            "bar",
            ["Anuj", "Devansh", "Paras", "Rahul", "Abhishek", "Shubham", "Raj"],
            [50, 10, 5, 2, 20, 30, 45],
            "Assignment score"
        );
    });
</script>

<div class="chart-container" bind:this={chartContainer}>
    <div class="chart-wrapper">
        <canvas id="myLineChart"></canvas>
    </div>
    <div class="chart-wrapper">
        <canvas id="myBarChart"></canvas>
    </div>
</div>

<style>
    .chart-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
    }

    .chart-wrapper {
        width: 100%;
        height: 300px;
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
        .chart-container {
            flex-direction: row;
            max-width: 1200px;
        }

        .chart-wrapper {
            width: 50%;
            padding: 0 1rem;
        }
    }
</style>