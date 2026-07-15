## 📌 Project Overview

This project demonstrates a complete **CI/CD (Continuous Integration & Continuous Deployment)** pipeline on AWS for a Node.js Express application.

The pipeline automatically builds, tests, packages, and deploys the application to **AWS Elastic Beanstalk** whenever code is pushed to the **main** branch of the GitHub repository.

CI/CD Workflow
Developer pushes code to GitHub.
GitHub automatically triggers AWS CodePipeline.
CodePipeline downloads the latest source code.
AWS CodeBuild:
Installs dependencies
Runs Jest test cases
Packages the application
Build artifacts are stored in Amazon S3.
Elastic Beanstalk deploys the latest application version.
Application becomes available to users.

🛠 AWS Services Used
AWS CodePipeline
AWS CodeBuild
AWS Elastic Beanstalk
Amazon S3
Amazon SNS
Amazon EventBridge
IAM
CloudWatch

📂 Project Structure
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

⚙ Tech Stack
Backend
Node.js
Express.js
Testing
Jest
Supertest
Cloud
AWS CodePipeline
AWS CodeBuild
AWS Elastic Beanstalk
Amazon S3
Amazon SNS
Amazon EventBridge
IAM
Version Control
Git
GitHub

✅ Features
Automated CI/CD Pipeline
GitHub Push Trigger
Automated Testing using Jest
Zero Manual Deployment
Elastic Beanstalk Deployment
Amazon S3 Artifact Storage
Email Notifications using SNS
EventBridge Integration
CloudWatch Monitoring
Infrastructure managed by AWS

🚀 Getting Started
Clone Repository
git clone https://github.com/<your-username>/node-cicd-demo.git

cd node-cicd-demo
Install Dependencies
npm install
Run Application
npm start

Application runs on

http://localhost:8080
Run Tests
npm test


📚 Learning Outcomes

This project demonstrates practical experience with:

CI/CD concepts
GitHub integration with AWS
AWS CodePipeline
AWS CodeBuild
Elastic Beanstalk deployment
Amazon S3 artifact management
Automated testing with Jest
Event-driven notifications
IAM role configuration
DevOps automation


👨‍💻 Author

Bhavith Reddy

If you found this project helpful, consider giving it a ⭐ on GitHub!
