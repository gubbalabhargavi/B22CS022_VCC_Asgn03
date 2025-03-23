#!/bin/bash

INSTANCE_NAME="auto-scale-instance"
ZONE="us-central1-a"

echo "Creating a new instance on GCP..."
gcloud compute instances create $INSTANCE_NAME \
    --zone=$ZONE \
    --machine-type=e2-medium \
    --image-family=ubuntu-2204-lts \
    --image-project=ubuntu-os-cloud

echo "Transferring files to GCP instance..."
scp -i ~/.ssh/id_rsa -r /local/path user@$INSTANCE_NAME:/remote/path

echo "Auto-scaling complete!"
