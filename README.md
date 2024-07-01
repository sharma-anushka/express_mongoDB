# ChitChat - An Express and MongoDB Chat Application

This is a simple chat application built using Express.js and MongoDB.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB

### Installing

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**
    ```bash
    cd express_mongoDB
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1. **Start MongoDB:**
    Make sure MongoDB is running on your system. You can start it using the following command (assuming MongoDB is installed as a service):
    ```bash
    mongod
    ```

2. **Start the application:**
    ```bash
    npm start
    ```
    or if you are using `nodemon` for development:
    ```bash
    nodemon
    ```

3. **Access the application:**
    The server will start on port 8080. You can access it at `http://localhost:8080`.

## Application Routes

- **GET /chats**: Fetch and display all chats.
- **GET /chats/new**: Display the form to create a new chat.
- **POST /chats**: Create a new chat.
- **GET /chats/:id/edit**: Display the form to edit a chat.
- **PUT /chats/:id**: Update an existing chat.
- **GET /**: Basic route to test the server.

## File Structure

express_mongoDB/
│

├── models/

│ └── chat.js # Chat model schema

├── public/

│ └── ... # Static files (CSS, JS, etc.)

├── views/

│ ├── edit.ejs # View for editing a chat

│ ├── newChat.ejs # View for creating a new chat

│ └── showAll.ejs # View for displaying all chats

├── index.js # Main server file

├── package.json # Project metadata and dependencies

└── README.md # This README file



## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [EJS](https://ejs.co/) - Template engine

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Authors

- **ANUSHKA**  [sharma-anushka](https://github.com/sharma-anushka)


## Acknowledgments

- Hat tip to anyone whose code was used

