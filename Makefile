install:
	docker-compose up -d --remove-orphans --build
	docker exec -it php-container bash -c 'composer install'
	docker-compose run --rm node yarn

up:
	docker-compose up -d --remove-orphans
	docker-compose run --rm node yarn encore dev --watch

down:
	docker-compose down --remove-orphans