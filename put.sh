echo "arg1 $1"
curl -X PUT -d '{"id": "'"${1}"'", "title": "PUT", "description": "this is a product", "price": 3}' -H 'Content-Type: application/json' http://localhost:8080/products 
