Medihome – An Online Based Pharmacy
📖 Project Description

Medihome is a web-based online pharmacy management system that allows users to browse medicines, upload prescriptions, place orders, and communicate with administrators in real time.

The system includes email verification using SMTP and live chat support using Socket.IO, making it suitable for a real-world online pharmacy scenario.

This project is developed using Flask (Python) as the backend framework and HTML, CSS, and JavaScript for the frontend.

✨ Key Features

User Registration & Login

Email Verification using SMTP

Medicine Browsing & Details Page

Cart & Checkout System

Order Confirmation & Invoice

Prescription Upload System

User Dashboard & Admin Dashboard

Live Chat Support (Socket.IO)

Review & Feedback System

Responsive Web Design

🛠️ Technologies Used

Backend: Python (Flask)

Frontend: HTML, CSS, JavaScript

Real-time Communication: Socket.IO

Email Service: SMTP

Database: MySQL

Template Engine: Jinja2

📂 Project Folder Structure
MediHome/
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
1. Clone the Repository
git clone https://github.com/naimul1086/MediHome.git

2. Go to Project Folder
cd MediHome

3. Install Required Packages
pip install flask flask-socketio flask-mail mysql-connector-python

4. Configure Database

Create a MySQL database

Update database credentials inside app.py

5. Configure SMTP Email

Set your email and password in app.py

Enable App Password / SMTP access

6. Run the Application
python app.py

7. Open in Browser
http://127.0.0.1:5000/

📧 Email Verification System

Uses SMTP to send verification emails

Users must verify their email before accessing full features

💬 Live Chat Support

Implemented using Socket.IO

Enables real-time communication between users and admin

Improves customer support experience
