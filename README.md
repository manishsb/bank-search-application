# Bank-search-application

## Routes

1. Login ( `POST /login`)
   <br/>Requires a body with key `user` Ex: `{ user: someUser }`.
   <br/>Responds with an object containing a JSON Web Token to access further routes.
   
 2. Fetch Bankdetails by IFSC (`GET /bank`)
    <br/>Requires an authorization token in headers, which you can get after making a request to `login` route.
    <br/>Supports query parameters -- `bank`(bank Name), `ifsc`(IFSC code), `city`(city Name)
    <br/>Supports limit and offset query parameters.
    <br/>Responds with an array of objects containing the banks which match the given parameters.
