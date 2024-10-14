## vite 프로젝트를 그냥 만든 것과 tanstack router로 만든 것의 차이

### vite.config.ts

vite 프로젝트는 @vitejs/plugin-react-swc를 쓰고
tanstack router는 @vitejs/plugin-react를 씀

> 아마 어떤 것으로 빌드하느냐 차이지 않을까 싶음

### tsconfig.json

vite 프로젝트는 include를 기준으로 2개의 파일로 나누어 놓음

- tsconfig.node.json
  include: ["vite.config.ts"]
- tsconfig.app.json
  include: ["src"]
