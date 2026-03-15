.PHONY: help install dev build preview clean

help:
	@echo "Available targets:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start Vite dev server"
	@echo "  make build    - Type-check and build production bundle"
	@echo "  make preview  - Preview production build"
	@echo "  make clean    - Remove build artifacts and dependencies"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

clean:
	rm -rf dist node_modules
