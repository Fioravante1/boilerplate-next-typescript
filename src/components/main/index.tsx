import * as S from './styles';

const Main = ({
  title = 'Next Boilerplate',
  description = 'TypeScript, ReactJs, NextJs e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Imagem de um átomo" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor na frente da tela com codigo"
      />
    </S.Wrapper>
  );
};

export default Main;
