DOCKER_DEV_IMAGE = devcode
DOCKER_TAG = 1.0.0-backend-dev
DOCKER_FILE_PATH = ./backend/Dockerfile.dev

docker-dev:
	docker build -t $(DOCKER_DEV_IMAGE):$(DOCKER_TAG) -f $(DOCKER_FILE_PATH) .