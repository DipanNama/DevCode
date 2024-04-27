# Tripura Developers Community Website

Welcome to the Tripura Developers Community Website! This website serves as a platform for local developers in Tripura to connect, collaborate, and share knowledge.

## Technologies Used

- Docker
- MongoDB
- Express
- React.js
- Node.js
- Vite
- SCSS
- Tailwind CSS

## Ideas to be implemented

- Project idea/code sharing section
- problem discussion forum /doubt solving
- DSA sheet / problems section
- various data visualisation section
- overall one global chat box / post related something
- - where various person will have various authority
- - admin , sub-admin & different roles
- personal message section/ individual account
- community meet-up (online/offline)
- open-source contribution
- New opportunity/hackathon/announcement
- our own hackathon (implementation)
  -- web dev projects
  -- app dev projects
  -- innovative software idea
  -- our own CTF
- notes sharing
- AI integration for various purposes
- why to learn what ?

```bash
^ basic computer science
^ Linux
^ cyber security
^ DSA
^ Web Development
^ app development
^ Dev Ops & others
^ Learn AI tools
^ UI / UX design
```

## Installation

To install and run this website menually, follow these steps:

1. Clone the repository:

   ```bash
   https://github.com/DipanNama/DevCode.git
   ```

2. Navigate to the project directory:

   ```bash
   cd DevCode
   ```

3. Install the dependencies for backend:

   ```bash
   npm install
   ```

4. Start the development server for backend:

   ```bash
   npm run dev
   ```

5. Open new Terminal and Navigate to the project directory for frontend:

   ```bash
   cd frontend
   ```

6. Install the dependencies for frontend:

   ```bash
   npm install
   ```

7. Start the development server for frontend:

   ```bash
   npm run dev
   ```

8. Open your browser and visit `http://localhost:8080` to view the frontend.

9. Open your postman and make a get request on `http://localhost:3000` to get the response form the backend.

## Installation using Docker

To install and run this website using Docker and Docker Compose, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/DipanNama/DevCode.git
   ```

2. Navigate to the project directory:

   ```bash
   cd DevCode
   ```

3. Create a `.env` file in the project root directory and add the following environment variables:

   ```plaintext
   MONGODB_URI=mongodb://mongo:27017/devcode
   ```

4. Build and start the containers using Docker Compose:

   ```bash
   docker-compose up -d
   ```

   This command will build the Docker images and start the containers in detached mode.

5. Open your browser and visit `http://localhost:8080` to view the website.

6. Open your Postman or any API testing tool and make a GET request to `http://localhost:3000` to interact with the backend API.

## Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
