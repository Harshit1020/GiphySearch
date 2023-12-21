# Next.js with Firebase Authentication and GIPHY API Integration

A full-stack web application built with Next.js, Firebase Authentication, and GIPHY API integration. The app allows users to search for GIFs, mark favorites, implement hot search, and enjoy infinite scroll functionality.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Authentication](#authentication)
- [GIF Search and Gallery](#gif-search-and-gallery)
- [Optional Features](#optional-features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

In this project, we have implemented a Next.js application that incorporates Firebase Authentication for user login and registration. The main feature is a GIF search functionality powered by the GIPHY API. Users can also mark GIFs as favorites, implement hot search, and enjoy infinite scroll.

## Features

- User authentication with Firebase
- GIF search using the GIPHY API
- Mark GIFs as favorites
- Hot search feature for dynamic updates
- Infinite scroll for efficient navigation

## Authentication

- Users can log in using their email and password.
- New users can sign up for a new account.
- Firebase Authentication web SDK is used for the authentication process.

## GIF Search and Gallery

- The application uses the GIPHY API to display a gallery of GIFs based on user-searched keywords.
- Pagination is implemented for efficient navigation through search results.

## Optional Features

### Marking Favorites

- Users can mark individual GIFs as favorites.
- A "favorites" section is implemented on the home page, allowing users to view their selected GIFs.

### Hot Search and Loading Animations

- Hot search feature updates GIFs dynamically as the user types, without needing to press a search button.
- Loading animations enhance the user experience during data fetching.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-project.git`
2. Install dependencies: `npm install`
3. Set up Firebase: Create a Firebase project and configure Firebase Authentication.
4. Set up GIPHY API: Obtain an API key from GIPHY and replace it in the code.
5. Start the development server: `npm run dev`

## Usage

- Visit the deployed application: [Your App URL]
- Log in or sign up to access GIF search and other features.

## Screenshots and Demo
![Screenshot (899)](https://github.com/Harshit1020/GiphySearch/assets/95414266/254daa96-328f-49d2-96e3-ccbf08d443fb)


![Screenshot (900)](https://github.com/Harshit1020/GiphySearch/assets/95414266/0fb554ab-75b6-4d19-b88f-dae9f837ec63)
![Screenshot (907)](https://github.com/Harshit1020/GiphySearch/assets/95414266/88ce113b-7649-4e24-838f-be00fa95e957)
![Screenshot (901)](https://github.com/Harshit1020/GiphySearch/assets/95414266/ff05fc8b-096f-49a3-b0ec-8149c9e18d7d)
![Screenshot (902)](https://github.com/Harshit1020/GiphySearch/assets/95414266/cc1735dd-20ca-44ca-8710-f18a42896248)
![Screenshot (903)](https://github.com/Harshit1020/GiphySearch/assets/95414266/4b3d8118-4c0f-4b86-8992-ad6e9f2f20d7)
![Screenshot (904)](https://github.com/Harshit1020/GiphySearch/assets/95414266/381aff3d-c966-4d7a-a0d0-9b2a3a1651a5)
![Screenshot (905)](https://github.com/Harshit1020/GiphySearch/assets/95414266/fc6a4550-8a8b-4965-bb16-8f7398be8f03)
![Screenshot (906)](https://github.com/Harshit1020/GiphySearch/assets/95414266/bebb7e69-8a3e-48fd-ab1d-4d8d5b69f912)



## Folder Structure

The project follows a structured organization:

- `/components`: React components used in the application.
- `/pages`: Next.js page components.
- `/styles`: Stylesheets for styling components.
- `/firebase`: Firebase configuration and related files.

## Technologies Used

- Next.js
- Firebase Authentication
- GIPHY API
- React
- Tailwind CSS

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
