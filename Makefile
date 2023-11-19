# Makefile

.PHONY: build-front build-back start stop logs logs-back

build-front:
	@echo "Building front Docker image..."
	docker build -t front-image ./front

build-back:
	@echo "Building back Docker image..."
	docker build -t back-image ./back

build:
	@echo "Building Docker containers..."
	docker-compose up --build

start:
	@echo "Starting Docker containers..."
	docker-compose up -d

stop:
	@echo "Stopping and removing Docker containers..."
	docker-compose down

logs:
	docker-compose logs -f

logs-back:
	docker-compose logs -f back