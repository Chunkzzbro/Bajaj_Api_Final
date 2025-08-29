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

🌐 Hosted URL

The API is deployed on Render:
👉 https://bajaj-finserve-api.onrender.com/

# 📬 Example Requests
## ✅ Example A

Request

{
  "data": ["a", "1", "334", "4", "R", "$"]
}


Response

{
    "is_success": true,
    "user_id": "renjith_anil_06092004",
    "email": "renjithaniltvm@gmail.com",
    "roll_number": "22BAI1050",
    "odd_numbers": [
        "1"
    ],
    "even_numbers": [
        "334",
        "4"
    ],
    "alphabets": [
        "A",
        "R"
    ],
    "special_characters": [
        "$"
    ],
    "sum": "339",
    "concat_string": "Ra"
}

<img width="1128" height="977" alt="image" src="https://github.com/user-attachments/assets/fca7a6f8-0aa2-4564-82e9-b24c710dd9c5" />

## ✅ Example B

Request:
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}

Response:
{
    "is_success": true,
    "user_id": "renjith_anil_06092004",
    "email": "renjithaniltvm@gmail.com",
    "roll_number": "22BAI1050",
    "odd_numbers": [
        "5"
    ],
    "even_numbers": [
        "2",
        "4",
        "92"
    ],
    "alphabets": [
        "A",
        "Y",
        "B"
    ],
    "special_characters": [
        "&",
        "-",
        "*"
    ],
    "sum": "103",
    "concat_string": "ByA"
}

<img width="1361" height="921" alt="image" src="https://github.com/user-attachments/assets/03e3aa65-c831-4623-9562-d7101bd70d6f" />

## ✅ Example C

Request:
{
  "data": ["A", "ABcD", "DOE"]
}

Response:
{
    "is_success": true,
    "user_id": "renjith_anil_06092004",
    "email": "renjithaniltvm@gmail.com",
    "roll_number": "22BAI1050",
    "odd_numbers": [],
    "even_numbers": [],
    "alphabets": [
        "A",
        "ABCD",
        "DOE"
    ],
    "special_characters": [],
    "sum": "0",
    "concat_string": "EoDdCbAa"
}

<img width="899" height="923" alt="image" src="https://github.com/user-attachments/assets/812622ec-8c0c-45e9-b46a-a2ef99bc46e0" />




