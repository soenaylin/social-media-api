# social-media-api

# X API Deployment (Render + MongoDB Atlas)

## 1. Create MongoDB Atlas

-   Free cluster
-   Add user
-   Whitelist: 0.0.0.0/0
-   Get connection string

## 2. Deploy to Render

-   New Web Service
-   Environment → Docker
-   Connect your GitHub repo

## 3. Add Environment Variables

PORT=10000
MONGO_URI=your-atlas-connection-string
IMAGES_PATH=/app/images

## 4. Render will auto-deploy on each push.
