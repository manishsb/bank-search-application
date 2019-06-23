# Bank-search-application

## Routes

1. Login ( `POST /login`)
   <br/>Requires a body with key `user` Ex: `{ user: someUser }`.
   <br/>Responds with an object containing a JSON Web Token to access further routes.
   
 2. Fetch Bankdetails by IFSC (`GET /ifsc/:ifsc`)
    <br/>Requires an IFSC code in path. An authorization token in headers, which you can get after making a request to `login` route.
    <br/>Supports limit and offset query parameters.
    <br/>Responds with an object containg the details of the corresponding bank
    
 3. Fetch all Bank details given bank name and city name (`GET /bank/:bank/:city`)
    <br/>Requires an bank and city name in path. An authorization token in headers, which you can get after making a request to `login` route
    <br/>Supports limit and offset query parameters.
    <br/>Responds with an array of objects containg the details of the corresponding banks
