# Messaging App

A real-time messaging application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with WebSockets (Socket.IO) for real-time communication.

## Features

- **Real-time messaging** with WebSockets (Socket.IO)
- **User authentication** using JWT (JSON Web Token)
- **Chat rooms and one-on-one messaging**
- **MongoDB database** for storing messages and user data
- **Responsive UI** built with React.js and Tailwind CSS
- **RESTful API** for user and message management

## Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO (for real-time messaging)
- JWT (for authentication)

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

### Steps to Run Locally

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/messaging-app.git
   cd messaging-app
   ```

2. **Install dependencies**
   ```sh
   # Install frontend dependencies
   cd client
   npm install
   ```
   ```sh
   # Install backend dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the `server` directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the backend**
   ```sh
   cd server
   npm start
   ```

5. **Run the frontend**
   ```sh
   cd client
   npm start
   ```

6. **Open in your browser**
   - Visit `http://localhost:3000`

## API Endpoints

### Auth Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user and return a token

### Message Routes
- `GET /api/messages/:chatId` - Fetch messages from a conversation
- `POST /api/messages/send` - Send a new message

### User Routes
- `GET /api/users` - Get a list of users
- `GET /api/users/:id` - Get user details

## Future Improvements
- Implement push notifications
- Add media (images, videos) support in messages
- Improve UI with animations

## License
This project is licensed under the MIT License.

