import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  pre {
    overflow-x: hidden !important;

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      background: #f4f4f4;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f4f4f4;
    }
  }
`;
