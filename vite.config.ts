import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default mergeConfig(
  defineConfig({
    plugins: [react()],
    root: "./", // 루트 디렉터리 설정
    build: {
      rollupOptions: {
        input: {
          main: "./index.refactoring.html", // 사용하고자 하는 HTML 파일로 경로 지정
        },
      },
    },
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
    },
  })
);
