const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.path.json");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
	webpack: {
		alias: {
			"@components": resolvePath("./src/components"),
			"@services": resolvePath("./src/services"),
			"@store": resolvePath("./src/store"),
			"@styles": resolvePath("./src/styles"),
			"@hooks": resolvePath("./src/hooks"),
			"@utils": resolvePath("./src/utils"),
		},
	},
	jest: {
		configure: {
			preset: "ts-jest",
			moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
				prefix: "<rootDir>/src/",
			}),
		},
	},
};
