import * as Styled from './styles';

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <Styled.Message>{message}</Styled.Message>;
};
