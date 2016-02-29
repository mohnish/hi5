PROGRAM="Hi5"
DIST_DIR=dist

clean:
	@echo "$(PROGRAM): cleaning old distribution files..."
	rm -fr $(DIST_DIR)

dist: clean
	@echo "$(PROGRAM): preparing distribution directories..."
	@mkdir -p $(DIST_DIR)
	@echo "$(PROGRAM): making hi5 browser compatible..."
	@./node_modules/.bin/browserify index.js -o $(DIST_DIR)/index.js
	@echo "$(PROGRAM): minimizing assets..."
	@./node_modules/.bin/uglifyjs --compress --mangle --output $(DIST_DIR)/hi5.min.js -- $(DIST_DIR)/index.js
	@echo "$(PROGRAM): cleaning up..."
	rm "$(DIST_DIR)/index.js"
	@echo "$(PROGRAM): ✔ ready to go"

watch:
	@./node_modules/.bin/mocha --watch --growl --colors

test:
	@./node_modules/.bin/mocha --growl --colors

.PHONY: dist clean test watch
