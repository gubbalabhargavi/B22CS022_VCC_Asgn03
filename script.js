document.addEventListener('DOMContentLoaded', function() {
    // Update time
    function updateTime() {
        const now = new Date();
        document.getElementById('current-time').textContent = now.toLocaleString();
    }
    
    // Get server info
    function getServerInfo() {
        fetch('/server-info')
            .then(response => response.json())
            .then(data => {
                document.getElementById('server-ip').textContent = data.ip;
                document.getElementById('server-location').textContent = data.location;
                
                // Update gauges
                const cpuGauge = document.getElementById('cpu-gauge');
                const memoryGauge = document.getElementById('memory-gauge');
                
                cpuGauge.style.width = data.cpu + '%';
                memoryGauge.style.width = data.memory + '%';
                
                document.getElementById('cpu-usage').textContent = data.cpu + '%';
                document.getElementById('memory-usage').textContent = data.memory + '%';
                
                // Change color based on value
                if (data.cpu > 75) {
                    cpuGauge.style.backgroundColor = '#FF5252';
                } else if (data.cpu > 50) {
                    cpuGauge.style.backgroundColor = '#FFC107';
                }
                
                if (data.memory > 75) {
                    memoryGauge.style.backgroundColor = '#FF5252';
                } else if (data.memory > 50) {
                    memoryGauge.style.backgroundColor = '#FFC107';
                }
            })
            .catch(error => console.error('Error fetching server info:', error));
    }
    
    // Generate CPU load
    document.getElementById('load-test').addEventListener('click', function() {
        fetch('/generate-load', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(error => console.error('Error generating load:', error));
    });
    
    // Initial updates
    updateTime();
    getServerInfo();
    
    // Periodic updates
    setInterval(updateTime, 1000);
    setInterval(getServerInfo, 2000);
});
