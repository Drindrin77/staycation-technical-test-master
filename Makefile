# Makefile

.PHONY: start stop logs logs-back

# TODO: to fix back is not waiting for postgres
start:
	@echo "Starting Docker containers..."
	docker-compose up postgres -d
	docker-compose up back -d
	docker-compose up front -d

stop:
	@echo "Stopping and removing Docker containers..."
	docker-compose down

logs:
	docker-compose logs -f

logs-back:
	docker-compose logs -f back