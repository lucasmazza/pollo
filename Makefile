test:
	@python -m SimpleHTTPServer

min:
	@uglifyjs -o pollo.min.js lib/pollo.js

.PHONY: test