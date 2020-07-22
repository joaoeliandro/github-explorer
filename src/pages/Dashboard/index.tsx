import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Title, Form } from './styles';

const Dasboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo Github" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Dasboard;
