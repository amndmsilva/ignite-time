import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  color: ${(props) => props.theme["zinc-100"]};

  cursor: pointer;

  transition: 1s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme["indigo-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["indigo-700"]};
  }
`;
export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme["rose-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["rose-700"]};
  }
`;
