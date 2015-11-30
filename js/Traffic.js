// Plugin Simulate
var Traffic = function() {
    this.config = {
        // Initial Time
        time: "Tue Dec 01 2015 12:00:00 GMT-0300 (CLT)",
        // Duration Series Time (Milliseconds)
        timeDuration: 1000,
        // Range Series Time (Minutes)
        timeInterval: 5,
        // Range Scalability
        ranges: [
            { name: 'Umbral 00%',  value: 0,   start: 0,   finish: 0,   operation: '*',  action: 0 },
            { name: 'Umbral 08%',  value: 8,   start: 0,   finish: 8,   operation: '<=', action: -3 },
            { name: 'Umbral 15%',  value: 15,  start: 8,   finish: 15,  operation: '<=', action: -2 },
            { name: 'Umbral 25%',  value: 25,  start: 15,  finish: 25,  operation: '<=', action: -1 },
            { name: 'Umbral 75%',  value: 75,  start: 75,  finish: 85,  operation: '>=', action: 1 },
            { name: 'Umbral 85%',  value: 85,  start: 85,  finish: 92,  operation: '>=', action: 2 },
            { name: 'Umbral 92%',  value: 92,  start: 92,  finish: 100, operation: '>=', action: 3 },
            { name: 'Umbral 100%', value: 100, start: 100, finish: 100, operation: '*',  action: 0 }
        ],
        // Architecture
        architecture: {
            min: 50,
            max: 400,
            instances: {
                active: 120,
                inactive: 25
            }
        }
    };
    this.data = [
        { cpu: 90.34, latency: 23.45, memory: 12.34, timeout: 12.34 },
        { cpu: 92.34, latency: 93.45, memory: 12.34, timeout: 12.34 },
        { cpu: 98.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 62.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 67.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 72.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 65.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 82.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 97.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 76.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 76.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 76.34, latency: 29.34, memory: 12.34, timeout: 12.34 },
        { cpu: 82.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 92.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 },
        { cpu: 12.34, latency: 12.34, memory: 12.34, timeout: 12.34 }
    ];
};

Traffic.prototype.config = function() {};