# # Start Nginx
# # service nginx start
# nginx -g "daemon off;"
# # nginx -t

# # Start MongoDB
# mongod --config /etc/mongod.conf &

# # Sleep for a few seconds
# sleep 3

# # Run your Node.js application
# nodemon index.js

#!/bin/bash

# Start MongoDB
mongod --config /etc/mongod.conf &

# Sleep for a few seconds
sleep 3

# Start Node app
nodemon index.js &

# Start Nginx in foreground
nginx -g "daemon off;"
