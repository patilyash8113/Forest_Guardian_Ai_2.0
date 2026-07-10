# 🌲 Forest Guardian AI

> **AI-Powered Forest Incident Reporting & Risk Assessment Platform**

Forest Guardian AI is an intelligent environmental monitoring platform that enables citizens to report forest-related incidents such as illegal logging, forest fires, wildlife poaching, pollution, and habitat destruction. The system uses Artificial Intelligence to automatically analyze each report, assess its risk level, generate recommendations, and visualize the collected data through an interactive Power BI dashboard.

---

## 📌 Project Overview

Traditional forest incident reporting systems often rely on manual processes such as phone calls, emails, or paper-based reports. These methods can delay response times and make it difficult for authorities to prioritize incidents.

Forest Guardian AI addresses these challenges by providing an AI-powered automated reporting system that:

- Allows citizens to report incidents through a web application.
- Uses AI to classify incidents and calculate risk.
- Stores analyzed reports in Google Sheets.
- Displays real-time analytics in Power BI.
- Supports faster decision-making for environmental authorities.

---

# 🎯 Objectives

- Simplify forest incident reporting.
- Automate environmental incident analysis.
- Classify incident types using AI.
- Generate risk scores and recommendations.
- Maintain a centralized incident database.
- Provide interactive dashboards for monitoring.
- Improve response efficiency through automation.

---

# 🌍 Supported Incident Types

The AI can classify reports into categories such as:

- 🌲 Illegal Logging
- 🔥 Forest Fire
- 🐾 Wildlife Poaching
- ⛏ Illegal Mining
- 💧 Water Pollution
- 🧴 Plastic Waste Dumping
- ☣ Chemical Pollution
- 🌳 Habitat Destruction
- 🏠 Encroachment
- 🛣 Road Construction
- 🐘 Human-Wildlife Conflict
- 🌊 Flood Damage
- 🪨 Landslide
- 🌿 Deforestation
- ❓ Unknown

---

# 🏗 System Architecture

```
Citizen
    │
    ▼
Forest Guardian AI Website
    │
    ▼
Report Form
    │
    ▼
n8n Webhook
    │
    ▼
OpenAI AI Agent
    │
    ▼
Risk Assessment
    │
    ▼
Google Sheets Database
    │
    ▼
Power BI Dashboard
    │
    ▼
Forest Authorities
```

---

# ⚙ Workflow

### Step 1

Citizen visits the Forest Guardian AI website.

### Step 2

The user submits an incident report including:

- Name
- Email
- Phone Number
- Location
- Description

### Step 3

The report is sent to an **n8n Webhook**.

### Step 4

The **OpenAI AI Agent** analyzes the report and generates:

- Incident Type
- Risk Level
- Priority
- Risk Score
- Confidence Score
- Environmental Impact
- Possible Causes
- Recommended Actions
- Response Time
- Summary

### Step 5

The analyzed data is automatically stored in **Google Sheets**.

### Step 6

The Power BI dashboard updates automatically.

### Step 7

Authorities can monitor reports and respond based on AI recommendations.

---

# ✨ Features

- 🌿 Modern Responsive Website
- 🤖 AI-Powered Incident Analysis
- 📊 Interactive Power BI Dashboard
- ⚡ Automated Workflow using n8n
- 📁 Google Sheets Integration
- 📈 Risk Score Generation
- 🚨 Priority Classification
- 📧 Automated Email Notifications
- 🌍 Environmental Impact Assessment
- 📱 Mobile Friendly Interface

---

# 🛠 Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS

## Automation

- n8n

## Artificial Intelligence

- OpenAI GPT

## Database

- Google Sheets

## Data Visualization

- Power BI

## Version Control

- GitHub

## Deployment

- Netlify

---

# 📂 Project Structure

```
Forest-guardian-AI
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── config.js
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
└── ...
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/patilyash8113/Forest-guardian-AI.git
```

Navigate into the project

```bash
cd Forest-guardian-AI
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 🔗 Configure n8n Webhook

Open:

```
src/config.js
```

Replace the placeholder webhook URL with your own:

```javascript
export const WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL";
```

---

# 📊 Dashboard

The Power BI dashboard provides:

- Total Reports
- Average Risk Score
- High Risk Incidents
- Critical Reports
- Incident Type Distribution
- Risk Level Analysis
- Location Analysis
- Interactive Filters

---

# 🤖 AI Analysis Output

For every submitted report, the AI generates:

```json
{
  "incident_type": "",
  "risk": "",
  "priority": "",
  "risk_score": 0,
  "confidence": 0.00,
  "environmental_impact": "",
  "possible_causes": "",
  "recommendation": "",
  "response_time": "",
  "location": "",
  "summary": ""
}
```

---

# 🌱 Sustainable Development Goal

This project supports:

## SDG 15 — Life on Land

Forest Guardian AI contributes to sustainable forest management by enabling faster reporting, AI-assisted decision making, and improved environmental monitoring.

---

# 📸 Screenshots

> Add screenshots here

- Home Page
- Report Form
- AI Output
- n8n Workflow
- Power BI Dashboard
- Lean Canvas

---

# 🔮 Future Scope

- 📱 Mobile Application
- 🛰 Satellite Monitoring
- 📍 GPS Integration
- 🧠 AI Image Recognition
- 🚁 Drone Surveillance
- 🗺 GIS Mapping
- 🌐 Multi-language Support
- 📲 SMS Notifications
- ☁ Cloud Database Integration

---

# 👨‍💻 Developer

**Yash Patil**

---

# 🌐 Live Demo

https://forest-guardian-ai.netlify.app/

---

# 💻 GitHub Repository

https://github.com/patilyash8113/Forest-guardian-AI

---

# 📄 License

This project was developed for educational and internship purposes.

---

# ⭐ Acknowledgement

Special thanks to my mentors, faculty members, and the open-source community for their guidance and support throughout the development of this project.

---

## 🚀 Thank You for Visiting!

If you found this project useful, consider giving the repository a ⭐ on GitHub.