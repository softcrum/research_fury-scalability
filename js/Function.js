// Se inicializa el simulador
$('.Header-button button').on('click', function () {
    // Initial Plugin Simulate
    var appSimulate = new Simulate();
    // Setting Simulate
    appSimulate.console = '.Console-terminal .Wrapper';
    appSimulate.cpu = '#MetricCPU';
    appSimulate.latency = '';
    appSimulate.memory = '';
    appSimulate.timeout = '';
    appSimulate.traffic = '';
    // Initial Metrics
    appSimulate.initMetricCPU();
    appSimulate.initMetricMemory();
    appSimulate.initMetricTimeout();
    appSimulate.initMetricLatency();
    // Trace Metric of Traffic
    setInterval(function () {
        appSimulate.updateMetricCPU();
        appSimulate.updateMetricMemory();
        appSimulate.updateMetricTimeout();
        appSimulate.updateMetricLatency();
    }, 30000);
});