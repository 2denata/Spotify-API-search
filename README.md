# Spotify-API-search

Simple web application designed to search for music on Spotify using the Spotify Web API. This application allows users to find songs or artists and displays the search results directly on the web page.

![nirwana](https://github.com/user-attachments/assets/6d71617a-1009-46ff-8450-a82c183dda8c)

# DISCLAIMER
**For Personal Use Only**: This project uses AJAX to make API requests directly from the client side, exposing the client_id and client_secret in the JavaScript code. This means that the API credentials are visible to users and should not be used in production environments. For production use, it is advisable to implement a backend server to securely handle API credentials and requests.

# How It Works
1. **Access Token Retrieval**:
    The application sends a POST request to Spotify’s Accounts service to obtain an access token. This token is required to authenticate requests to the Spotify Web API.
3. **Perform Search**:
    Once the access token is retrieved, a GET request is sent to Spotify’s Search API endpoint with the user’s query. The search can be based on song names or artist names.
4. **Display Results**:
    The application processes the API response and displays the search results on the web page. Each result includes the song name, artist name, album name, and an audio preview if available.

# Prerequisites
- A modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari)
- An active internet connection
