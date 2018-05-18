//To facilitate eventually connecting the frontend to a server, the postMessage function sends the new message to the mock server object below.  Post requests to the mock server can then later be replaced wih fetch requests to a server.

class MockServer {
  constructor(){
    this.log = [],
    this.messageId = 1;
  }

  post(newMessage){
    newMessage.id = this.messageId++
    this.log.push(newMessage)
    console.log("server log is", this.log)
    return this.response(newMessage)
  }

  response(newMessage){
    return newMessage
  }
}

export const server = new MockServer
