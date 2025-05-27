import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // next.config.js와 .env 파일을 로드하기 위한 Next.js 앱의 경로
  dir: './',
});

// Jest에 적용할 커스텀 설정
const customJestConfig = {
  // 테스트 환경 설정
  testEnvironment: 'jest-environment-jsdom',

  // 테스트 파일 위치 설정
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],

  // 모듈 경로 별칭 설정 (@/ 사용을 위해)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // 테스트 전에 실행할 파일
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // 테스트 커버리지 설정
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/**/index.{js,jsx,ts,tsx}',
  ],
};

export default createJestConfig(customJestConfig);
