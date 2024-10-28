import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Wrapper = styled.div`
  position: relative;
  background: #1c1c1e;
  width: 90%;
  max-width: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
`;

export const Header = styled.div`
  position: relative;
  border-top: 4px solid #fa473b;
  padding: 1rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: none;
  border: none;
  color: #a8a29e;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #fafafa;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 0 1rem;
  text-align: left;
  margin-bottom: 1.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
  }
`;

export const Message = styled.section`
  p {
    color: #fa473b;
    border-left: 3px solid #fa473b;
    background-color: #2a1e1e;
    padding: 1rem;
  }
`;

export const Source = styled.section`
  p {
    background-color: #111111;
    color: #c6c7b8;
    padding: 1rem;
  }
`;

export const Stack = styled.section`
  p {
    cursor: pointer;
    border: none;
    font-size: 0.8rem;
    color: #c6c7b8;
  }

  pre {
    margin-top: 0.5rem;
    max-height: 150px;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;
