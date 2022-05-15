install:
	docker-compose up -d --remove-orphans --build
	docker exec -it php-container bash -c 'composer install'

up:
	docker-compose up -d --remove-orphans

down:
	docker-compose down --remove-orphans