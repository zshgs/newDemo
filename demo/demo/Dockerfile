# Use the official OpenJDK image as the base image
FROM openjdk:17

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the local target directory to the container
COPY target/*.jar app.jar

# Set the command to run the application
CMD ["java", "-jar", "app.jar"]
