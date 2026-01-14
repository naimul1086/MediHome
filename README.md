Medihome – An Online Based Pharmacy

📖 Project Description

Medihome is a web-based online pharmacy management system that allows users to browse medicines, upload prescriptions, place orders, and communicate with administrators in real time.
The system also includes email verification using SMTP and live chat support using Socket.IO, making it closer to a real-world pharmacy platform.

This project is developed using Flask (Python) as the backend framework and HTML, CSS, and JavaScript for the frontend.

✨ Key Features

1.User Registration & Login

2.Email Verification using SMTP

3.Medicine Browsing & Details Page

4.Cart & Checkout System

5.Order Confirmation & Invoice

6.Prescription Upload System

7.User Dashboard & Admin Dashboard

8.Live Chat Support (Socket.IO)

9.Review & Feedback System

10.Responsive Web Design

🛠️ Technologies Used

Backend: Python (Flask)

Frontend: HTML, CSS, JavaScript

Real-time Communication: Socket.IO

Email Service: SMTP

Database: MySQL

Template Engine: Jinja2

📂 Project Folder Structure
SD3 FINAL/
│
├── static/
│   ├── css/                # All CSS files
│   ├── js/                 # JavaScript files
│   ├── images/             # Website images
│   ├── prescriptions/      # Uploaded prescription files
│   └── uploads/            # Uploaded user files
│
├── templates/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── admin-dashboard.html
│   ├── medicines.html
│   ├── cart.html
│   ├── checkout.html
│   ├── invoice.html
│   ├── order-confirmation.html
│   ├── upload-prescription.html
│   ├── admin_chat.html
│   ├── customer.html
│   ├── about.html
│   ├── services.html
│   ├── contact.html
│   ├── review.html
│   ├── verify.html
│   ├── view-details.html
│   └── coming-soon.html
│
├── app.py                  # Main Flask application
└── README.md               # Project documentation

▶️ How to Run the Project
✅ Prerequisites

Python 3.8 or higher

MySQL Server

pip (Python Package Manager)

🚀 Steps to Run

1.Clone the Repository

git clone https://github.com/naimul1086/medihome.git


2.Go to Project Folder

cd "Medihome"


3.Install Required Packages

pip install flask flask-socketio flask-mail mysql-connector-python


4.Configure Database

Create a MySQL database

Update database credentials inside app.py

Configure SMTP Email

Set your email and password in app.py

Enable App Password / SMTP access

Run the Application

Type in yout terminal : python app.py


Open Browser

http://127.0.0.1:5000/

📧 Email Verification System

Uses SMTP to send verification emails

Users must verify email before accessing full features

💬 Live Chat Support

Implemented using Socket.IO

Enables real-time communication between users and admin

Improves customer support experience