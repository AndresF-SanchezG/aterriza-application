
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
