docker build -f Dockerfile.dev .

sudo docker run -p 3000:3000 bbfbcb0e32d9

Using Volumes
1. Put a bookmark on the node_modules folder
2. Map the pwd into the '/app' folder
sudo docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>

-v <some_folder> - Mark this as a placeholder for the folder that is inside the container, do not try to map it to anything
-v <local_folder>/<container_folder> - Map local_folder to container_folder

Run tests:
sudo docker run -it 93993cc84d90 npm run test

Or start container with docker-compose, where we have all the mappings
And then in another window run:
sudo docker exec -it <container_id> npm run test