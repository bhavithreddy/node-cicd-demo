# 🚀 Node.js CI/CD Pipeline on AWS

A complete **CI/CD (Continuous Integration & Continuous Deployment)** pipeline for a **Node.js Express** application using AWS services. The pipeline automatically builds, tests, packages, and deploys the application to **AWS Elastic Beanstalk** whenever code is pushed to the **main** branch of the GitHub repository.

---

## 📌 Project Overview

This project demonstrates an end-to-end CI/CD workflow using AWS managed services. Every push to the `main` branch triggers an automated deployment pipeline without any manual intervention.

### CI/CD Workflow

```text
Developer Pushes Code
          │
          ▼
      GitHub Repository
          │
          ▼
   AWS CodePipeline Trigger
          │
          ▼
     AWS CodeBuild
    ├── Install Dependencies
    ├── Run Jest Tests
    └── Package Application
          │
          ▼
     Amazon S3 Artifacts
          │
          ▼
 AWS Elastic Beanstalk Deploy
          │
          ▼
   Application Available
          │
          ▼
 SNS Notifications & CloudWatch Monitoring
```
<img width="671" height="318" alt="image" src="https://github.com/user-attachments/assets/d3030799-cbd1-4ec1-be74-80bad8c3e1e6" />


---

## 🛠️ AWS Services Used

- AWS CodePipeline
- AWS CodeBuild
- AWS Elastic Beanstalk
- Amazon S3
- Amazon SNS
- Amazon EventBridge
- AWS IAM
- Amazon CloudWatch

---

## 📂 Project Structure

```text
node-cicd-demo/
│
├── app.js
├── server.js
├── app.test.js
├── package.json
├── package-lock.json
├── buildspec.yml
├── .gitignore
└── README.md
```

---

## ⚙️ Tech Stack

### Backend

- Node.js
- Express.js

### Testing

- Jest
- Supertest

### Cloud & DevOps

- AWS CodePipeline
- AWS CodeBuild
- AWS Elastic Beanstalk
- Amazon S3
- Amazon SNS
- Amazon EventBridge
- AWS IAM
- Amazon CloudWatch

### Version Control

- Git
- GitHub

---

## ✅ Features

- Automated CI/CD Pipeline
- GitHub Push Trigger
- Automated Testing using Jest
- Automated Build & Packaging
- Zero Manual Deployment
- AWS Elastic Beanstalk Deployment
- Amazon S3 Artifact Storage
- Amazon SNS Email Notifications
- Amazon EventBridge Integration
- Amazon CloudWatch Monitoring
- IAM-based Secure Access Control

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/node-cicd-demo.git
cd node-cicd-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```

The application will be available at:

```
http://localhost:8080
```

### 4. Run Tests

```bash
npm test
```

---

## 📚 Learning Outcomes

This project demonstrates practical experience with:

- CI/CD concepts
- GitHub integration with AWS
- AWS CodePipeline
- AWS CodeBuild
- AWS Elastic Beanstalk
- Amazon S3 artifact management
- Automated testing using Jest
- Event-driven notifications with SNS and EventBridge
- IAM role and permission management
- DevOps automation on AWS

---

## 📈 CI/CD Pipeline Flow

```text
GitHub
   │
   ▼
CodePipeline
   │
   ▼
CodeBuild
   │
   ├── Install Dependencies
   ├── Run Tests
   └── Build Artifact
   │
   ▼
Amazon S3
   │
   ▼
Elastic Beanstalk
   │
   ▼
Live Application
   │
   ├── Amazon SNS Notifications
   └── CloudWatch Monitoring
```

---

## 👨‍💻 Author

**Bhavith Reddy**

Interested in **DevOps**, **Cloud Engineering**, and **AWS Automation**.

---

## ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub!
