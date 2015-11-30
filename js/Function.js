// Declare Variable
var simulateInterval;
$('.Header-button .stop').addClass('buttonHidden');

// Initial Simulate
$('.Header-button .start').on('click', function () {
    // Change Button (Start -> Stop)
    $('.Header-button .start').addClass('buttonHidden');
    $('.Header-button .stop').removeClass('buttonHidden');
    // Initial Plugin Simulate, Traffic
    var SimulateApp = new Simulate();
    var TrafficApp = new Traffic();
    // Setting SimulateApp
    SimulateApp.console = '.Console-terminal .Wrapper';
    SimulateApp.cpu = '#MetricCPU';
    SimulateApp.latency = '#MetricLatency';
    SimulateApp.memory = '#MetricMemory';
    SimulateApp.timeout = '#MetricTimeout';
    SimulateApp.traffic = '';
    // Initial Metrics
    SimulateApp.updateSettings();
    SimulateApp.insertLabel(SimulateApp.counter);
    SimulateApp.insertTraffic();
    SimulateApp.initMetricCPU();
    SimulateApp.initMetricMemory();
    SimulateApp.initMetricTimeout();
    SimulateApp.initMetricLatency();
    // Trace Metric of Traffic
    simulateInterval = setInterval(function () {
        SimulateApp.updateSettings();
        SimulateApp.updateMetricCPU();
        SimulateApp.updateMetricMemory();
        SimulateApp.updateMetricTimeout();
        SimulateApp.updateMetricLatency();
        SimulateApp.scalability();
    }, TrafficApp.config.timeDuration);
});

// Stop Simulate
$('.Header-button .stop').on('click', function () {
    // Change Button (Stop -> Start)
    $('.Header-button .start').removeClass('buttonHidden');
    $('.Header-button .stop').addClass('buttonHidden');
    // Stop Process
    clearInterval(simulateInterval);
});