# Docker-Start

This repository contains a simple project that helped me get started with Docker and deploy applications to AWS. It demonstrates the use of Docker for containerization and AWS for hosting.

## Features

- **Dockerized Application**: The project is set up with Docker, making it easy to package and run anywhere.
- **AWS Deployment**: The application is pushed and deployed to AWS, utilizing cloud infrastructure.
  
## Technologies Used

- **Docker**: For containerizing the application and ensuring it runs consistently across different environments.
- **AWS**: The application is deployed on AWS, leveraging cloud hosting services.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Docker
- AWS CLI (for pushing to AWS)

### Cloning the Repository

To clone this repository, use the following command:

```bash
git clone git@github.com:KartikAg13/docker-start.git
cd docker-start
```

### Building and Running the Docker Container

1. Build the Docker image:

```bash
docker build -t docker-start-app .
```

2. Run the Docker container:

```bash
docker run -d -p 80:80 docker-start-app
```

### Pushing to AWS

Follow these steps to push the Docker image to AWS:

1. Tag the image for the AWS repository:

```bash
docker tag docker-start-app:latest <aws-repo-url>:latest
```

2. Push the image to AWS:

```bash
docker push <aws-repo-url>:latest
```

## Author

- **Kartik Agrawal** – [KartikAg13](https://github.com/KartikAg13)
