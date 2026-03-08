# My Movie App 🎬

## Overview
My Movie App is a dynamic and interactive web application built with **React (TypeScript)** that allows users to explore, search, and bookmark a vast collection of movies and TV series. Leveraging the power of **Firebase** for authentication and data storage, and integrating with **The Movie Database (TMDB) API**, this application provides a seamless experience for discovering trending, popular, and personalized entertainment content.

## Features
-   **User Authentication**: Secure user registration, login, and logout functionalities powered by Firebase Authentication.
-   **Extensive Content Catalog**: Browse trending movies, popular movies, and TV series fetched from the TMDB API.
-   **Search Functionality**: Efficiently search for specific movies or TV series across the entire database.
-   **Detailed Content Pages**: View comprehensive details for individual movies and TV series, including overview, release dates, and ratings.
-   **Interactive Movie Trailers**: Watch movie and TV series trailers directly within the app using an embedded YouTube player.
-   **Personalized Bookmarking**: Logged-in users can bookmark their favorite movies and TV series, stored securely in Firebase Firestore.
-   **Responsive Design**: A fluid and adaptive user interface crafted with Tailwind CSS, ensuring optimal viewing across various devices.
-   **Infinite Scrolling**: Enjoy a continuous browsing experience with automatic loading of more content as you scroll.
-   **Global State Management**: Efficient state management for movies, authentication, and bookmarks using React Context API.
-   **Toast Notifications**: User-friendly feedback for actions like bookmarking or authentication status.

## Getting Started

Follow these steps to set up and run My Movie App locally on your machine.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Eleniyancode/my-movie-app.git
    ```

2.  **Navigate to the Project Directory**:
    ```bash
    cd my-movie-app
    ```

3.  **Install Dependencies**:
    ```bash
    npm install
    ```

### Environment Variables

This project requires environment variables for API keys and Firebase configuration. Create a `.env` file in the root of the project and populate it with the following:

```dotenv
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_FIREBASE_API_KEY="AIzaSyXXXXXXXXXXXXXXXXXXXXXX" # Replace with your Firebase Web API Key
VITE_FIREBASE_AUTH_DOMAIN="my-movie-app-abf2a.firebaseapp.com" # Replace with your Firebase Auth Domain
VITE_FIREBASE_PROJECT_ID="my-movie-app-abf2a" # Replace with your Firebase Project ID
VITE_FIREBASE_STORAGE_BUCKET="my-movie-app-abf2a.firebasestorage.app" # Replace with your Firebase Storage Bucket
VITE_FIREBASE_MESSAGING_SENDER_ID="879755082531" # Replace with your Firebase Messaging Sender ID
VITE_FIREBASE_APP_ID="1:879755082531:web:8b2f3eaca8ef93b5006a96" # Replace with your Firebase App ID
VITE_FIREBASE_MEASUREMENT_ID="G-L35B40RFH8" # Replace with your Firebase Measurement ID
```
*   **Note on Firebase Keys**: The Firebase configuration is currently hardcoded in `src/firebase/firebase.js`. For production-grade applications, it's highly recommended to externalize these values into environment variables as demonstrated above for enhanced security and flexibility.

## Usage

After completing the installation and setting up environment variables, you can run the application:

1.  **Start the Development Server**:
    ```bash
    npm run dev
    ```
2.  **Access the Application**:
    Open your web browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

**Exploring the App:**

*   **Home Page**: Upon launching, you'll see a curated selection of trending and recommended movies. You can scroll down to load more content dynamically.
*   **Navigation**: Use the sidebar to navigate between Home, Trending (Movies), Popular (TV Series), and Bookmarks sections.
*   **Search**: Use the search bar at the top to find any movie or TV series by title.
*   **Content Details**: Click on any movie or TV series card to view its detailed page, including the overview, release date, and an embedded trailer.
*   **Authentication**:
    *   **Sign Up**: Create a new account to unlock the bookmarking feature.
    *   **Login**: If you already have an account, log in to access your saved bookmarks and bookmark new content.
    *   **Logout**: You can log out from the sidebar.
*   **Bookmarking**: On a movie or TV series detail page, click the "Bookmark" button to add or remove it from your personal collection. Your bookmarks will be visible on the "Bookmark" page.

## Technologies Used

| Category         | Technology               | Description                                           |
| :--------------- | :----------------------- | :---------------------------------------------------- |
| **Frontend**     | React                    | A JavaScript library for building user interfaces     |
| **(TypeScript)** | TypeScript               | Typed superset of JavaScript for scalable applications |
| **Styling**      | Tailwind CSS             | A utility-first CSS framework for rapid UI development |
| **Routing**      | React Router DOM         | Declarative routing for React applications            |
| **State Mgt.**   | React Context API        | Native React for global state management              |
| **Animations**   | Motion                   | A simple animation library for React                  |
| **Forms**        | React Hook Form          | Performant, flexible and extensible forms with easy validation |
| **Video Player** | React YouTube            | A simple YouTube player component for React           |
| **BaaS (Backend as a Service)** | Firebase                 | Authentication and NoSQL database (Firestore)         |
| **API**          | The Movie Database (TMDB)| REST API for movie and TV series data                 |
| **Build Tool**   | Vite                     | Next generation frontend tooling                      |
| **Linting**      | ESLint                   | Pluggable JavaScript linter                           |
| **Icons**        | Lucide React             | A collection of beautiful and customizable open-source icons |
| **SVGs**         | Vite Plugin SVGR         | Transforms SVG files into React components            |

## Contributing
We welcome contributions to My Movie App! To contribute:

*   Fork the repository and clone it to your local machine.
*   Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
*   Make your changes and ensure the code adheres to existing style guidelines.
*   Write clear, concise commit messages.
*   Push your branch to your forked repository.
*   Open a pull request to the `main` branch of this repository, describing your changes in detail.

## Author Info

This project was developed by:

**[EleniyanCode]**
*   **LinkedIn**: [https://www.linkedin.com/in/eleniyancode](https://www.linkedin.com/in/eleniyancode)
*   **X (Twitter)**: [https://twitter.com/eleniyancode](https://twitter.com/eleniyancode)

---
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
