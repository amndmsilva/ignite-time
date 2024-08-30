import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["zinc-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-radius: 2px;
  border-bottom: 2px solid ${(props) => props.theme["zinc-500"]};
  font-size: 1.125rem;
  font-weight: semibold;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["zinc-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["indigo-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["zinc-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesInput = styled(BaseInput)`
  width: 4rem;
`;
