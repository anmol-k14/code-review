# AI Code Review Tool

This project provides a simple platform for reviewing code using the power of AI. It consists of a frontend built with React and a backend using Node.js with Express, leveraging the `@google/generative-ai` package to generate code reviews.

## Key Features

- **Code Editor**: A simple and intuitive code editor on the frontend.
- **AI-Powered Code Reviews**: Utilizes Google's Generative AI to provide suggestions.
- **Markdown Rendering**: Displays the AI code review in a readable Markdown format.

## Project Structure

```
AI Code Review Tool/
├── .gitignore
├── BackEnd/
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── controllers/
│       │   └── ai.controller.js
│       ├── routes/
│       │   └── ai.routes.js
│       └── services/
│           └── ai.service.js
├── Frontend/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── assets/
│       │   └── react.svg
│       ├── index.css
│       └── main.jsx
└── README.md
```

-   **`.gitignore`**: Specifies intentionally untracked files that Git should ignore.
-   **`BackEnd/`**: Contains the Node.js backend application.
    -   **`package-lock.json`**: Records the exact versions of dependencies for the backend.
    -   **`package.json`**: Defines the dependencies and metadata for the backend project.
    -   **`server.js`**: The main entry point for the backend server.
    -   **`src/`**: Contains the source code for the backend.
        -   **`app.js`**: Configures and exports the Express application.
        -   **`controllers/`**: Contains route handling logic.
            -   **`ai.controller.js`**: Handles the AI code review requests.
        -   **`routes/`**: Defines the API routes.
            -   **`ai.routes.js`**: Defines the AI-related routes.
        -   **`services/`**: Contains business logic and external API interactions.
            -   **`ai.service.js`**: Contains the logic to interact with Google's Generative AI and generate code reviews.
-   **`Frontend/`**: Contains the React frontend application.
    -   **`.gitignore`**: Specifies intentionally untracked files that Git should ignore.
    -   **`eslint.config.js`**: Configuration file for ESLint, a JavaScript linter.
    -   **`index.html`**: The main HTML file for the React application.
    -   **`package-lock.json`**: Records the exact versions of dependencies for the frontend.
    -   **`package.json`**: Defines the dependencies and metadata for the frontend project.
    -   **`public/`**: Contains static assets.
        -   **`vite.svg`**: Vite's logo.
    -   **`src/`**: Contains the source code for the frontend.
        -   **`App.css`**: Styles for the main application component.
        -   **`App.jsx`**: The main application component.
        -   **`assets/`**: Contains assets like images.
            -   **`react.svg`**: React's logo.
        -   **`index.css`**: Global styles for the React application.
        -   **`main.jsx`**: The entry point for the React application.
-   **`README.md`**: Provides an overview of the project, instructions, and other important details.

## Technologies Used

### Frontend

-   React
-   Vite
-   Axios
-   react-simple-code-editor
-   react-markdown
-   rehype-highlight
-   prismjs
-   highlight.js

### Backend

-   Node.js
-   Express
-   cors
-   cookie-parser
-   dotenv
-   @google/generative-ai

## Environment Variables

The application relies on the following environment variables:

-   **`VITE_BASE_URL`** (Frontend): The base URL for the backend API. (e.g., `"http://localhost:3000"`)  This is configured in `Frontend\src\App.jsx`.
-   **`PORT`** (Backend): The port the backend server listens on (defaults to 3000). This is configured in `BackEnd\server.js`.
-   **`GOOGLE_GEMINI_KEY`** (Backend): The API key for accessing Google's Gemini AI service. This is used in `BackEnd\src\services\ai.service.js`.
-    **`FRONTENDURL`**(Backend): The frontend URL, enabling CORS configuration. configured in `BackEnd\server.js`.

**Note:** Ensure these environment variables are set before running the application. Create a `.env` file in both `Frontend` and `BackEnd` directories

## Getting Started

### Prerequisites

-   Node.js and npm installed.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/anmol-k14/code-review.git
    cd code-review
    ```

2.  **Backend Setup:**

    ```bash
    cd BackEnd
    npm install
    ```

    Create a `.env` file in the `BackEnd` directory and add the following:

    ```
    PORT=3000
    GOOGLE_GEMINI_KEY=<YOUR_GOOGLE_GEMINI_KEY>
    FRONTENDURL=http://localhost:5173
    ```

    Run the backend:

    ```bash
    node server.js
    ```

3.  **Frontend Setup:**

    ```bash
    cd Frontend
    npm install
    ```

    Create a `.env` file in the `Frontend` directory and add the following:

    ```
    VITE_BASE_URL=http://localhost:3000
    ```

    Run the frontend:

    ```bash
    npm run dev
    ```

Open your browser and navigate to the address provided by vite, usually `http://localhost:5173`.
You can now paste code into the editor and click review.
```