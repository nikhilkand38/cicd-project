# 🚀 Node.js CI/CD Docker Automation Project

# 📌 Project Overview

This project demonstrates a complete **CI/CD pipeline implementation** for a Node.js Express application using:

- ✅ Express.js REST API
- ✅ Unit testing with Jest & Supertest
- ✅ Code coverage reporting
- ✅ Docker containerization
- ✅ Docker Hub image publishing
- ✅ GitHub Actions automation
- ✅ Production artifact preparation

The objective of this project is to showcase a **real-world DevOps workflow** where application changes automatically trigger:

1. Code checkout
2. Dependency installation
3. Unit testing
4. Coverage generation
5. Build process
6. Production packaging
7. Docker image creation
8. Docker Hub push

---

# 🏗 Architecture Overview

```
Developer Push
       ↓
GitHub Actions Trigger
       ↓
Install Dependencies
       ↓
Run Tests (Jest)
       ↓
Build Application
       ↓
Remove Dev Dependencies
       ↓
Build Docker Image
       ↓
Push Image to Docker Hub
```

---

# 📂 Project Structure

```
cicd-project/
│
├── .github/
│   └── workflows/
│       └── main.yml              # CI/CD pipeline configuration
│
├── src/
│   └── index.js                  # Express server
│
├── test/
│   └── index.test.js             # Jest test cases
│
├── Dockerfile                    # Docker build instructions
├── package.json
├── package-lock.json
└── README.md
```

---

# 🖥 Application Details

## Server Information

- Port: `3000`
- Framework: Express.js
- Language: Node.js

---

## 📡 API Endpoints

### 🔹 GET /

**Response:**
```json
{
  "message": "Node Automation Demo Running"
}
```

---

### 🔹 GET /health

**Response:**
```
OK
```

---

# 🧪 Testing Strategy

Testing is implemented using:

- **Jest** → Test framework
- **Supertest** → HTTP assertion library

The application exports the Express app:

```js
module.exports = app;
```

This allows Jest to test endpoints without starting the actual server.

---

## ▶ Run Tests Locally

```bash
npm install
npm test
```

---

## 📊 Coverage Report

```bash
npm test
```

Jest automatically generates coverage output.

---

# 📦 NPM Scripts Explained

```json
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js",
  "test": "jest --coverage",
  "build": "mkdir -p dist && cp -r src/* dist/",
  "clean": "rm -rf dist",
  "package": "npm prune --production",
  "prepare:artifact": "npm run clean && npm run build && npm run package"
}
```

---

## Script Breakdown

| Command | Purpose |
|----------|----------|
| `npm start` | Runs production server |
| `npm run dev` | Development mode with auto-reload |
| `npm test` | Runs unit tests with coverage |
| `npm run build` | Copies source files to `dist/` |
| `npm run clean` | Removes previous builds |
| `npm run package` | Removes dev dependencies |
| `npm run prepare:artifact` | Full production preparation |

---

# 🐳 Docker Setup

## 📄 Dockerfile Overview

```dockerfile
FROM node:20

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

---

## 🛠 Build Docker Image

```bash
docker build -t <your-docker-username>/nodejs-automation-demo:0.1 .
```

---

## ▶ Run Container

```bash
docker run -p 3000:3000 <your-docker-username>/nodejs-automation-demo:0.1
```

Visit:

```
http://localhost:3000
```

---

## 📤 Push to Docker Hub

```bash
docker login
docker push <your-docker-username>/nodejs-automation-demo:0.1
```

---

# 🔁 CI/CD Pipeline (GitHub Actions)

Location:

```
.github/workflows/main.yml
```

---

## 🚀 Pipeline Triggers

- Push to `main` branch
- Manual trigger (`workflow_dispatch`)

---

## 🔄 Pipeline Stages

### 1️⃣ Checkout Code
Uses:
```
actions/checkout
```

### 2️⃣ Setup Node.js
Installs Node runtime.

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Run Tests
```bash
npm test
```

Pipeline fails automatically if tests fail.

### 5️⃣ Build Application
```bash
npm run build
```

### 6️⃣ Remove Dev Dependencies
```bash
npm run package
```

### 7️⃣ Build Docker Image
```bash
docker build
```

### 8️⃣ Docker Login
Uses repository secrets:

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

### 9️⃣ Push Docker Image
```bash
docker push
```

---

# 🔐 Required Secrets

Add in:

```
Repository → Settings → Secrets and Variables → Actions
```

| Secret | Description |
|--------|------------|
| DOCKER_USERNAME | Docker Hub username |
| DOCKER_PASSWORD | Docker Hub password or token |

---

# 🛠 Local Development Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd cicd-project
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Start Application

```bash
npm start
```

Open:

```
http://localhost:3000
```

---

# 📈 Production Workflow Summary

This project demonstrates:

✔ CI/CD automation  
✔ Test-driven pipeline  
✔ Docker-based deployment  
✔ Secret management  
✔ Image versioning strategy  
✔ Production dependency pruning  

# 🧠 Learning Outcomes

This project is ideal for understanding:

- How CI/CD pipelines work
- How Docker integrates into automation
- How tests protect deployments
- How secrets are securely managed
- How production packaging works

---

# 👨‍💻 Author

Nikhil Kandukuri  
CI/CD Node.js Docker Automation Demo

---
