# Setting Up GCP Auto-Scaling

## 1️⃣ Create a GCP Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **Create a New Project** and give it a name.
3. Note the **Project ID**.

## 2️⃣ Enable Compute Engine API
1. Navigate to **API & Services > Library**.
2. Search for **Compute Engine API** and enable it.

## 3️⃣ Create a Service Account & Get Key
1. Go to **IAM & Admin > Service Accounts**.
2. Create a new **service account** with **Compute Admin** role.
3. Generate a **JSON key file** and download it.

## 4️⃣ Install Google Cloud SDK on Local VM
```sh
sudo apt update && sudo apt install google-cloud-sdk -y
