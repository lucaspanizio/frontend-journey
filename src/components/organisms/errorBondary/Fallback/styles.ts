import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ef4444;
`;

export const Message = styled.p`
  font-size: 1.2rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
`;

export const RetryButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
