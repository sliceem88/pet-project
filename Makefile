install:
	docker-compose up -d --remove-orphans --build
	docker exec -it php-container bash -c 'composer install'
	docker-compose run --rm node yarn

up:
	docker-compose up -d --remove-orphans
	@echo project is UP on host: http://localhost:8080/
	docker-compose run --rm node yarn encore dev --watch

down:
	docker-compose down --remove-orphans

enter-php:
	docker exec -it php-container bash

enter-db:
	docker exec -it mariadb-container bash -c 'mysql -uroot -proot'