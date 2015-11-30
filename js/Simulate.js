// Initial Plugin Traffic
var TrafficApp = new Traffic();

// Plugin Simulate
var Simulate = function() {
    // Declare Variables
    this.console = '';
    this.cpu = '';
    this.latency = '';
    this.memory = '';
    this.timeout = '';
    this.trafficActive = 0;
    this.trafficCPU = '';
    this.trafficInactive = 0;
    this.trafficLabel = '';
    this.trafficLatency = '';
    this.trafficMemory = '';
    this.trafficTimeout = '';
    this.counter = 1;
    // Declare Charts
    this.chartCPU = '';
    this.chartLatency = '';
    this.chartMemory = '';
    this.chartTimeout = '';
};

// Initial Metric CPU
Simulate.prototype.initMetricCPU = function() {
    var ctx1 = $(this.cpu).get(0).getContext("2d");
    var dataset1 = Simulate.prototype.insertData();
        dataset1.push({
            label: "Traffic",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: this.trafficCPU
        });
    var data1 = {
        labels: Simulate.prototype.insertLabel(this.counter, TrafficApp.config.timeInterval),
        datasets: dataset1
    };
    this.chartCPU = new Chart(ctx1).Line(data1, {animationSteps: 15});
};

// Initial Metric Latency
Simulate.prototype.initMetricLatency = function() {
    var ctx2 = $(this.latency).get(0).getContext("2d");
    var dataset2 = Simulate.prototype.insertData();
        dataset2.push({
            label: "Traffic",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: this.trafficLatency
        });
    var data2 = {
        labels: Simulate.prototype.insertLabel(this.counter, TrafficApp.config.timeInterval),
        datasets: dataset2
    };
    this.chartLatency = new Chart(ctx2).Line(data2, {animationSteps: 15});
};

// Initial Metric Memory
Simulate.prototype.initMetricMemory = function() {
    var ctx3 = $(this.memory).get(0).getContext("2d");
    var dataset3 = Simulate.prototype.insertData();
        dataset3.push({
            label: "Traffic",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: this.trafficMemory
        });
    var data3 = {
        labels: Simulate.prototype.insertLabel(this.counter, TrafficApp.config.timeInterval),
        datasets: dataset3
    };
    this.chartMemory = new Chart(ctx3).Line(data3, {animationSteps: 15});
};

// Initial Metric Timeout
Simulate.prototype.initMetricTimeout = function() {
    var ctx4 = $(this.timeout).get(0).getContext("2d");
    var dataset4 = Simulate.prototype.insertData();
        dataset4.push({
            label: "Traffic",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: this.trafficTimeout
        });
    var data4 = {
        labels: Simulate.prototype.insertLabel(this.counter, TrafficApp.config.timeInterval),
        datasets: dataset4
    };
    this.chartTimeout = new Chart(ctx4).Line(data4, {animationSteps: 15});
};

// Insert Data Chart
Simulate.prototype.insertData = function() {
    // Declare variables
    var data = [];
    TrafficApp.config.ranges.map((range) => {
        data.push({
            label: range.name,
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [range.value, range.value, range.value, range.value, range.value, range.value, range.value, range.value]
        })
    });
    return data;
};

// Insert History
Simulate.prototype.insertHistory = function(status, time, ins_act, ins_ina, ins_esc) {
    var statusImage, template;
    switch (status) {
        case 'downgrade':
            statusImage = '<span class="glyphicon glyphicon-circle-arrow-down color-yellow"></span>';
            break;
        case 'normal':
            statusImage = '<span class="glyphicon glyphicon-circle-arrow-right color-green"></span>';
            break;
        case 'upgrade':
            statusImage = '<span class="glyphicon glyphicon-circle-arrow-up color-red"></span>';
            break;
        default:
            statusImage = '<span class="glyphicon glyphicon-circle-arrow-right color-green"></span>';
            break;
    }
    template =  '<div class="Status-log_children">' +
                    '<div class="col-xs-4">' +
                        statusImage +
                    '</div>' +
                    '<div class="col-xs-2">' +
                        time +
                    '</div>' +
                    '<div class="col-xs-2">' +
                        ins_act +
                    '</div>' +
                    '<div class="col-xs-2">' +
                        ins_ina +
                    '</div>' +
                    '<div class="col-xs-2">' +
                        ins_esc +
                    '</div>' +
                '</div>';
    $(".Status-log").prepend(template);
};

// Insert Label Chart
Simulate.prototype.insertLabel = function(counter, interval) {
    var timeTraffic = new Date(TrafficApp.config.time);
    var adjustedTime1 = new Date(timeTraffic);
        adjustedTime1.setMinutes(timeTraffic.getMinutes() + (interval * (counter - 9)));
        adjustedTime1 = adjustedTime1.getHours() + ':' + (adjustedTime1.getMinutes() < 10 ? '0' : '') + adjustedTime1.getMinutes();
    var adjustedTime2 = new Date(timeTraffic);
        adjustedTime2.setMinutes(timeTraffic.getMinutes() + (interval * (counter - 8)));
        adjustedTime2 = adjustedTime2.getHours() + ':' + (adjustedTime2.getMinutes() < 10 ? '0' : '') + adjustedTime2.getMinutes();
    var adjustedTime3 = new Date(timeTraffic);
        adjustedTime3.setMinutes(timeTraffic.getMinutes() + (interval * (counter - 7)));
        adjustedTime3 = adjustedTime3.getHours() + ':' + (adjustedTime3.getMinutes() < 10 ? '0' : '') + adjustedTime3.getMinutes();
    var adjustedTime4 = new Date(timeTraffic);
        adjustedTime4.setMinutes(timeTraffic.getMinutes() + (interval * (counter - 6)));
        adjustedTime4 = adjustedTime4.getHours() + ':' + (adjustedTime4.getMinutes() < 10 ? '0' : '') + adjustedTime4.getMinutes();
    var adjustedTime5 = new Date(timeTraffic);
        adjustedTime5.setMinutes(timeTraffic.getMinutes() + (interval * (counter - 5)));
        adjustedTime5 = adjustedTime5.getHours() + ':' + (adjustedTime5.getMinutes() < 10 ? '0' : '') + adjustedTime5.getMinutes();
    var adjustedTime6 = new Date(timeTraffic);
        adjustedTime6.setMinutes(timeTraffic.getMinutes() + (interval * (counter - 4)));
        adjustedTime6 = adjustedTime6.getHours() + ':' + (adjustedTime6.getMinutes() < 10 ? '0' : '') + adjustedTime6.getMinutes();
    var adjustedTime7 = new Date(timeTraffic);
        adjustedTime7.setMinutes(timeTraffic.getMinutes() + (interval * (counter - 3)));
        adjustedTime7 = adjustedTime7.getHours() + ':' + (adjustedTime7.getMinutes() < 10 ? '0' : '') + adjustedTime7.getMinutes();
    var adjustedTime8 = new Date(timeTraffic);
        adjustedTime8.setMinutes(timeTraffic.getMinutes() + (interval * (counter - 2)));
        adjustedTime8 = adjustedTime8.getHours() + ':' + (adjustedTime8.getMinutes() < 10 ? '0' : '') + adjustedTime8.getMinutes();
    this.trafficLabel = [ adjustedTime1, adjustedTime2, adjustedTime3, adjustedTime4, adjustedTime5, adjustedTime6, adjustedTime7, adjustedTime8 ];
    // Return Labels
    return this.trafficLabel;
};

// Insert Traffic
Simulate.prototype.insertTraffic = function() {
    // Get Data
    var traffic = TrafficApp.data;
    this.trafficCPU     = [0, 0, 0, 0, 0, 0, 0, traffic[this.counter - 1].cpu];
    this.trafficLatency = [0, 0, 0, 0, 0, 0, 0, traffic[this.counter - 1].latency];
    this.trafficMemory  = [0, 0, 0, 0, 0, 0, 0, traffic[this.counter - 1].memory];
    this.trafficTimeout = [0, 0, 0, 0, 0, 0, 0, traffic[this.counter - 1].timeout];
    // Insert History Initial
    var timeTraffic = new Date(TrafficApp.config.time);
    var adjustedTime = new Date(timeTraffic);
        adjustedTime.setMinutes(timeTraffic.getMinutes() + (TrafficApp.config.timeInterval * (this.counter - 2)));
        adjustedTime = adjustedTime.getHours() + ':' + (adjustedTime.getMinutes() < 10 ? '0' : '') + adjustedTime.getMinutes();
    $(".Status-log").html('');
    this.trafficActive = TrafficApp.config.architecture.instances.active;
    this.trafficInactive = TrafficApp.config.architecture.instances.inactive;
    Simulate.prototype.insertHistory('normal', adjustedTime, this.trafficActive, this.trafficInactive, 0);
};

// Scalability
Simulate.prototype.scalability = function() {
    var architectureMin = TrafficApp.config.architecture.min,
        architectureMax = TrafficApp.config.architecture.max,
        counterTotal, counterC = 0, counterL = 0, counterM = 0, counterT = 0, instances, label, log,
        ranges = TrafficApp.config.ranges,
        scalability = 0;
    // Calculate Upgrade and Downgrade
    ranges.map((range) => {
        switch (range.operation) {
            case '<=':
                if (TrafficApp.data[this.counter - 2]) {
                    ((range.start <= TrafficApp.data[this.counter - 2].cpu  && TrafficApp.data[this.counter - 2].cpu < range.finish) ? counterC = counterC + range.action : '');
                    ((range.start <= TrafficApp.data[this.counter - 2].latency  && TrafficApp.data[this.counter - 2].latency < range.finish) ? counterL = counterL + range.action : '');
                    ((range.start <= TrafficApp.data[this.counter - 2].memory  && TrafficApp.data[this.counter - 2].memory < range.finish) ? counterM = counterM + range.action : '');
                    ((range.start <= TrafficApp.data[this.counter - 2].timeout  && TrafficApp.data[this.counter - 2].timeout < range.finish) ? counterT = counterT + range.action : '');
                }
                break;
            case '>=':
                if (TrafficApp.data[this.counter - 2]) {
                    ((TrafficApp.data[this.counter - 2].cpu >= range.start  && TrafficApp.data[this.counter - 2].cpu < range.finish) ? counterC = counterC + range.action : '');
                    ((TrafficApp.data[this.counter - 2].latency >= range.start  && TrafficApp.data[this.counter - 2].latency < range.finish) ? counterL = counterL + range.action : '');
                    ((TrafficApp.data[this.counter - 2].memory >= range.start  && TrafficApp.data[this.counter - 2].memory < range.finish) ? counterM = counterM + range.action : '');
                    ((TrafficApp.data[this.counter - 2].timeout >= range.start  && TrafficApp.data[this.counter - 2].timeout < range.finish) ? counterT = counterT + range.action : '');
                }
                break;
            default:
                break;
        }
    });
    // Scalable System
    counterTotal = counterC + counterL + counterM + counterT;
    if ((this.trafficActive + counterTotal) < architectureMin) {
        this.trafficActive = architectureMin;
        scalability = 0;
        instances = this.trafficInactive;
    } else if ((this.trafficActive + counterTotal) > architectureMax) {
        this.trafficActive = architectureMax;
        scalability = 0;
        instances = this.trafficInactive;
    } else {
        this.trafficActive = this.trafficActive + counterTotal;
        if (counterTotal > 0) {
            instances = this.trafficInactive - counterTotal + '(' + counterTotal + ')';
        } else {
            instances = this.trafficInactive;
        }
        scalability = counterTotal;
    }
    if (scalability > 0) {
        label = 'upgrade';
    } else if (scalability == 0) {
        label = 'normal';
    } else {
        label = 'downgrade';
    }
    var timeTraffic = new Date(TrafficApp.config.time);
    var adjustedTime = new Date(timeTraffic);
        adjustedTime.setMinutes(timeTraffic.getMinutes() + (TrafficApp.config.timeInterval * (this.counter - 2)));
        adjustedTime = adjustedTime.getHours() + ':' + (adjustedTime.getMinutes() < 10 ? '0' : '') + adjustedTime.getMinutes();
    // Insert Log
    log =   '<div class="col-xs-12">' +
                'Actualización del procesamiento de métricas  [HORA: ' + adjustedTime + ']' +
            '</div><br /><br />' +
            '<div class="col-xs-12">' +
                'Métrica CPU: ' + (TrafficApp.data[this.counter - 2] ? TrafficApp.data[this.counter - 2].cpu : 0) + '%' +
                '  [Escalabilidad: ' + counterC + ']' +
            '</div>' +
            '<div class="col-xs-12">' +
                'Métrica Latencia: ' + (TrafficApp.data[this.counter - 2] ? TrafficApp.data[this.counter - 2].latency : 0) + '%' +
                '  [Escalabilidad: ' + counterL + ']' +
            '</div>' +
            '<div class="col-xs-12">' +
                'Métrica Memoria: ' + (TrafficApp.data[this.counter - 2] ? TrafficApp.data[this.counter - 2].memory : 0) + '%' +
                '  [Escalabilidad: ' + counterM + ']' +
            '</div>' +
            '<div class="col-xs-12">' +
                'Métrica Tiempo de respuesta: ' + (TrafficApp.data[this.counter - 2] ? TrafficApp.data[this.counter - 2].timeout : 0) + '%' +
                '  [Escalabilidad: ' + counterT + ']' +
            '</div>';
    $('.Console-log').html('');
    $('.Console-log').append(log);
    // Insert History Initial
    Simulate.prototype.insertHistory(label, adjustedTime, this.trafficActive, instances, scalability);
};

// Update Metric
Simulate.prototype.updateMetric = function(graphic, metric, counter, interval) {
    var data, dataset = [], traffic = TrafficApp.data;
        (traffic[counter - 2] != undefined ? data = traffic[counter - 2][metric] : data = 0);
    var timeTraffic = new Date(TrafficApp.config.time);
    var adjustedTime = new Date(timeTraffic);
        adjustedTime.setMinutes(timeTraffic.getMinutes() + (interval * (counter - 2)));
        adjustedTime = adjustedTime.getHours() + ':' + (adjustedTime.getMinutes() < 10 ? '0' : '') + adjustedTime.getMinutes();
    TrafficApp.config.ranges.map((range) => {
        dataset.push(range.value);
    });
    dataset.push(data);
    graphic.removeData();
    graphic.addData(dataset, adjustedTime);
};

// Update Metric CPU
Simulate.prototype.updateMetricCPU = function() {
    Simulate.prototype.updateMetric(this.chartCPU, 'cpu', this.counter, TrafficApp.config.timeInterval);
};

// Update Metric Latency
Simulate.prototype.updateMetricLatency = function() {
    Simulate.prototype.updateMetric(this.chartLatency, 'latency', this.counter, TrafficApp.config.timeInterval);
};

// Update Metric Memory
Simulate.prototype.updateMetricMemory = function() {
    Simulate.prototype.updateMetric(this.chartMemory, 'memory', this.counter, TrafficApp.config.timeInterval);
};

// Update Metric Timeout
Simulate.prototype.updateMetricTimeout = function() {
    Simulate.prototype.updateMetric(this.chartTimeout, 'timeout', this.counter, TrafficApp.config.timeInterval);
};

// Update Settings
Simulate.prototype.updateSettings = function() {
    // Update Counter
    this.counter = this.counter + 1;
};