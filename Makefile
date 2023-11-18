# Makefile

.PHONY: build-client build-server up down

build-client:
	@echo "Building client Docker image..."
	docker build -t client-image ./client

build-server:
	@echo "Building server Docker image..."
	docker build -t server-image ./server

up:
	@echo "Starting Docker containers..."
	docker-compose up --build -d

down:
	@echo "Stopping and removing Docker containers..."
	docker-compose down


logs:
	docker-compose logs -f