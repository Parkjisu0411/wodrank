// jest-dom의 matcher들을 전역으로 추가
import '@testing-library/jest-dom';

// 전역으로 사용할 mock 설정
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
