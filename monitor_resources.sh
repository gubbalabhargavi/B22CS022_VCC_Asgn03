#!/bin/bash

# Get CPU and Memory usage
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print 100 - $8}')
MEMORY_USAGE=$(free | awk '/Mem/{printf "%.2f", $3/$2 * 100}')

# Print resource usage
echo "CPU Usage: $CPU_USAGE%"
echo "Memory Usage: $MEMORY_USAGE%"

# Check if CPU usage exceeds 75%
if (( $(echo "$CPU_USAGE > 75" | bc -l) )); then
    echo "CPU usage exceeded 75%. Triggering auto-scaling..."
    ./migrate_to_gcp.sh  # Call migration script
fi
