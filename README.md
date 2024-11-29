WhatsApp Clone
A real-time messaging application built with the MEAN Stack (MongoDB, Express.js, Angular, Node.js) that replicates the functionality of WhatsApp. This project demonstrates the implementation of features like message encryption, real-time communication, group messaging, and user authentication.

🚀 Features
Real-time Messaging: Send and receive messages instantly using Socket.IO.
User Authentication: Secure login and registration system using JSON Web Tokens (JWT).
Group Chats: Create and manage group conversations with multiple participants.
Message Encryption: Ensure privacy and security of messages.
Chat History: View previous conversations and group chat histories.
Responsive Design: Fully responsive user interface for seamless use across devices.
🛠️ Tech Stack
Frontend: Angular
Backend: Node.js, Express.js
Database: MongoDB
Real-time Communication: Socket.IO
Authentication: JSON Web Tokens (JWT)
📂 Folder Structure
graphql
Copy code
WhatsApp-Clone/
├── client/               # Angular frontend
│   ├── src/              
│   ├── components/       # UI components
│   ├── services/         # API and socket services
│   ├── assets/           # Images, styles, etc.
│   └── app.module.ts
├── server/               # Node.js backend
│   ├── routes/           # API routes
│   ├── models/           # MongoDB schemas
│   ├── controllers/      # API logic
│   ├── middleware/       # Authentication middleware
│   └── server.js         # Server entry point
├── README.md             # Project documentation
└── package.json          # Dependencies and scripts
✨ Key Functionalities
Authentication

Login and registration using secure JWT-based tokens.
Password hashing using bcrypt.
Real-time Messaging

Real-time communication powered by Socket.IO.
Supports one-on-one chats and group chats.
Group Chat Management

Create, delete, and join group chats.
Admin privileges for group management.
Data Security

End-to-end message encryption.
Protected routes using JWT middleware.
Responsive Design

Built with Angular to ensure cross-device compatibility.
🛠️ Installation Guide
Prerequisites
Node.js (v16+)
Angular CLI (v15+)
MongoDB (running locally or cloud instance)
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/GokulanandM/Whatsapp-Clone.git
Navigate to the project directory:

bash
Copy code
cd WhatsApp-Clone
Install backend dependencies:

bash
Copy code
cd server
npm install
Install frontend dependencies:

bash
Copy code
cd ../client
npm install
Start MongoDB:

Ensure MongoDB is running on your local machine or use a cloud instance like MongoDB Atlas.
Start the backend server:

bash
Copy code
cd ../server
npm start
Start the Angular frontend:

bash
Copy code
cd ../client
ng serve
Open the application in your browser:

arduino
Copy code
http://localhost:4200
📸 Screenshots
Login Page

Chat Interface

🧩 Future Enhancements
Voice and Video Calls
Delivery and Read Receipts
Dark Mode Toggle
Push Notifications
👨‍💻 Author
Name: Gokulanand M
GitHub: GokulanandM
Email: gokulkvmhs2020@gmail.com
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (feature/new-feature).
Commit your changes.
Push to the branch.
Create a pull request.
📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

