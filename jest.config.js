/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/**/*.d.ts"],
};
