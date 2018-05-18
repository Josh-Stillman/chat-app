# Chat App Readme

This Chat App is set up as a two-user chat application.  The first user is on the left side of the screen and the second user is on the right side of the screen, in a single browser tab.  They can send messages to each other, and see an animation indicating when the other user is typing to them.  The chat history scrolls to the bottom as new messages come in.

There is no server in this version, but the code is designed to make it easy to refactor the code in the future to connect to a real server and show only one user's view on the screen.  Hence, the code makes use of a "mock server" held in memory when implementing the post-messages feature so that it can easily be replaced with a fetch request to a server.  

This app was designed in React and styled with Semantic UI React.

## Chat App Setup Instructions

First, ensure you have the current version of npm and React installed.  After extracting the app from the .zip file or cloning the app from GitHub at https://github.com/Josh-Stillman/chat-app, run 'npm install && npm start' from the command line in the app's directory.

### Chat App Git Log (as of 5/17/2018 8:21PM)

c374db5 add readme (Josh-Stillman, 1 second ago)
7194af9 revert divs in ChatWindow to semantic ui components (Josh-Stillman, 13 minutes ago)
65846d5 complete refactoring and revert to prior autoscroll approach (Josh-Stillman, 20 minutes ago)
ab9d3ce refactor postMessage function to use mock server (Josh-Stillman, 4 hours ago)
1b7c463 move inline styling to style sheets (Josh-Stillman, 4 hours ago)
88aa93c complete initial refactor (Josh-Stillman, 22 hours ago)
f9a80b6 add additional minor changes before refactoring (Josh-Stillman, 23 hours ago)
f473eec add autoscroll functionality and style messages (Josh-Stillman, 23 hours ago)
11560c3 complete typing indicator functionality (Josh-Stillman, 33 hours ago)
79a89d7 complete typing indicator animation (Josh-Stillman, 2 days ago)
66d4fc8 apply initial styling (Josh-Stillman, 2 days ago)
8d7f5f9 create basic chat functionality (Josh-Stillman, 3 days ago)
d509093 create and connect initial skeleton components (Josh-Stillman, 3 days ago)
65cf9a5 first commit (Josh-Stillman, 3 days ago)
