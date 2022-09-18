install:
	node ci
brain-games:
	node node bin/brain-games.js
publish:
	npm publish --dry-run