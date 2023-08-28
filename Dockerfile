# Use an official Mountebank image as the base image
FROM bbyars/mountebank

# Copy your Mountebank configuration JSON file into the container
COPY mountebank/mock-service.json.json /etc/mb/mock-service.json

# Expose the Mountebank port
EXPOSE 2525

# Set the Mountebank command to start Mountebank with your configuration
CMD ["mb", "--configfile", "/etc/mountebank/mock-service.json", "--allowInjection"]
