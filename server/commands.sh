docker compose -f docker-compose.test.yml up --build 

docker compose -f docker-compose.test.yml down  

ngrok http --domain profound-adequate-salmon.ngrok-free.app localhost:9000

docker run -it --rm --network host -e PGPASSWORD='dhansetu' postgres psql -h localhost -U postgres -d dhansetu