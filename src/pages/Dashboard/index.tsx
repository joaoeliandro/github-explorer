import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dasboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo Github" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52173525?s=460&u=c5449ff37a66ed39e4b065067492ff63366f7c05&v=4"
            alt="João Eliandro"
          />
          <div>
            <strong>joaoeliandro/github-explorer</strong>
            <p>Repository for my React learning during the GoStack course.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52173525?s=460&u=c5449ff37a66ed39e4b065067492ff63366f7c05&v=4"
            alt="João Eliandro"
          />
          <div>
            <strong>joaoeliandro/github-explorer</strong>
            <p>Repository for my React learning during the GoStack course.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52173525?s=460&u=c5449ff37a66ed39e4b065067492ff63366f7c05&v=4"
            alt="João Eliandro"
          />
          <div>
            <strong>joaoeliandro/github-explorer</strong>
            <p>Repository for my React learning during the GoStack course.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dasboard;
