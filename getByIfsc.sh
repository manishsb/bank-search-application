curl \
  --header "Content-type: application/json" \
  --header "x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFuaXNoIiwiaWF0IjoxNTYxMzAyNDI0LCJleHAiOjE1NjE3MzQ0MjR9.a7aUbaUWNow482nReOot6uRBilRz22TJzVtTSSA3_X4" \
  --request GET \
  "https://bank-service-backend.herokuapp.com/ifsc/ABHY0065001?limit=2&offset=0"