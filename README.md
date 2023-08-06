# User Admin

## Deploy

1. configure the environment variables of angular projects according to the nginx configuration
   ```ts
    // users-module
    export const environment = {
        API_URL: 'http://localhost:3000',
    };

    // user-admin-app
    export const environment = {
        USERS_MODULE: 'http://localhost:81',
        API_URL: 'http://localhost:3000',
    };
   ```

2. Build image from the root of the project with the following command
    ```bash
    docker build -t user-admin .
    ```
3. Run container
    ```bash
    docker run --name user-admin -dp 80:80 -dp 81:81 user-admin:latest
    ```