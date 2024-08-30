# ProjectManagmentSystem

## Overview

This project is a full-stack application with a backend powered by Node.js, Express, MongoDB, and GraphQL. The frontend is built with React and Apollo Client. The project demonstrates the integration of these technologies to build a robust and scalable application.

## Technologies

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - GraphQL

- **Frontend**:
  - React
  - Apollo Client

## Installation

### Backend

1. **Clone the repository:**

    ```bash
    git clone https://github.com/LidoHon/ProjectManagmentSystem.git
    cd ProjectManagmentSystem
    ```
2. **Navigate to the backend directory:**

    ```bash
    cd server
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following variables:

    ```
    MONGO_URI=your_mongodb_uri
    PORT=your_preferred_port
    ```

5. **Run the backend server:**

    ```bash
    npm start
    ```

### Frontend

1. **Navigate to the frontend directory:**

    ```bash
    cd client
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the frontend development server:**

    ```bash
    npm run dev
    ```

## Usage

1. **Backend**: The GraphQL API will be available at `http://localhost:your_preferred_port/graphql`.

2. **Frontend**: The React application will be available at `http://localhost:5173`.
3.  **Run both frontend and backend servers:**

    From the root folder, you can start both servers using:

    ```bash
    npm run dev
    ```

    This command will use `concurrently` to run both the frontend and backend servers simultaneously. The backend GraphQL API will be available at `http://localhost:your_preferred_port/graphql`, and the React application will be available at `http://localhost:5173`.

## Video Tutorial and Acknowledgements

This project follows along with the YouTube video tutorial: [GraphQL Crash Course With Full Stack MERN Project](https://youtu.be/BcLNfwF04Kw?si=TRLK7VTRBckWpkaK). Make sure to check out the video for detailed instructions and explanations.

You can find the original repository by [Brad Traversy](https://github.com/bradtraversy/project-mgmt-graphql). Thank you for providing the foundational work that this project builds upon.



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or submit pull requests if you have improvements or suggestions. 

