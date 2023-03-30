### RUN MONGO
docker-up-database:
	docker-compose --env-file ./docker.env up -d mongodb_container

docker-up-graylog:
	docker-compose --env-file ./docker.env up -d mongo elasticsearch graylog

docker-down:
	docker-compose --env-file ./docker.env down