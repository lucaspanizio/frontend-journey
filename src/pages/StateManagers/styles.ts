import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
`;

export const Display = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: #fefefe;
  text-align: center;
  background-color: #334155;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 15px;
  padding: 0.5rem;
  color: white;
  cursor: pointer;
`;

export const IncButton = styled(BaseButton)`
  background-color: #4caf50;
`;

export const DecButton = styled(BaseButton)`
  background-color: #f44336;
`;

export const ResetButton = styled(BaseButton)`
  background-color: #dedede;
  color: black;
`;
