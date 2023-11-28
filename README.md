
# Abstract 

The designed and built application is a travel agency website that provides the ability to request quotes for hotels (currently only Decameron hotels) and offers information about the company, including how to verify its authenticity and legality. Additionally, it utilizes technologies such as React, React Router, Docker, and Google Cloud in the construction and deployment process.

- Live Site URL: (https://bit.ly/AterrizaAPP)

# Code and Context
## 1. Docker Automation with GitHub Actions:

A workflow has been created in GitHub Actions that triggers on each push to the main branch. This workflow performs the build of a Docker image, authentication with Google Cloud, configuration of Docker for Google Cloud, and ultimately, pushes the image to Google Cloud's Container Registry.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/.github/workflows/docker-image.yml)

## 2. Dockerfile:

Dockerfile that sets up the application environment, installs dependencies, builds the application, and serves it on port 3000.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/Dockerfile)

## 3. App(React)

Main component that wraps the application with the quotation context provider.
Configuration of routes using React Router for different pages of the application.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/src/pages/App/index.jsx)

## 4. Context

A React context to manage the state related to quotations.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/src/Context/index.jsx)

## 5. Home
Main page displaying a basic layout with a navigation Navbar, a logo, cards, and a footer.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/src/pages/Home/index.jsx)

## 6. Card Componet

A React card component that displays two sections (Hotels and Experiences(Construction Component)) with images and links to specific routes using React Router.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/src/Components/Card/index.jsx)
