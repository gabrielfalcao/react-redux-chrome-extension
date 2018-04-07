export NODE_ENV	:= development

all: tests start

yarn.lock:
	yarn add $$(cat requirements.txt)
	yarn add --dev $$(cat development.txt)

start:
	yarn start


tests:
	yarn test


.PHONY: tests


reset:
	rm -rf node_modules yarn.lock
