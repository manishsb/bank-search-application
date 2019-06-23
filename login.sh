curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"user": "manish"}' \
  "https://bank-service-backend.herokuapp.com/login"