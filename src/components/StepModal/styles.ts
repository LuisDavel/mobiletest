
import  styled  from 'styled-components/native';

const Wrapper = styled.View`
  align-self: center;
  background-color: white;
  height: 550px;
  border-radius: 8px 8px 0 0;
  width: 100%;
  gap: 15px;
  /* border: 4px solid ${({ theme }) => theme.colors.white[700] }; */
  padding: ${({ theme }) => theme.spacings.default };
`;

export const Root = {
  Wrapper: Wrapper,
};