echo "arg1 $1"
curl -X DELETE -d '{"id": "'"${1}"'"}' -H 'Content-Type: application/json' http://localhost:8080/products 
