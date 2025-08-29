# Bajaj Finserv Health | Full Stack Assignment | VIT | 29 Aug 2025

This repository contains the implementation of the **Bajaj Finserv Health Full Stack Assignment** for VIT.  
The task was to build and host a **REST API** that processes an array of input data and returns structured results.

---

## 🚀 Tech Stack
- **Backend Framework**: Node.js with Express
- **Hosting**: Render (Free Web Service)
- **Version Control**: Git & GitHub

---

## 📌 Problem Statement
Build and host a REST API (method: **POST**) at the route:

## POST /bfhl

The API should accept an array of data and return:

1. Status (`is_success`)
2. User ID (`{full_name_ddmmyyyy}` in lowercase)
3. Email ID
4. College Roll Number
5. Array of even numbers
6. Array of odd numbers
7. Array of alphabets (converted to uppercase)
8. Array of special characters
9. Sum of numbers (as a string)
10. Concatenation of all alphabetical characters in reverse order with alternating caps

---

## 📂 Repository Structure
bfhl-api/
- index.js # Main Express server
- package.json # Node.js dependencies & scripts
- .gitignore # Ignored files
- README.md # Documentation


---

## ▶️ Run Locally
Clone the repository:
- git clone https://github.com/Chunkzzbro/Bajaj_Api_Final.git
- cd Bajaj_Api_Final

### Install dependencies:
- npm install

### Start the server:
- npm start

### API will run at:
- http://localhost:3000/bfhl
