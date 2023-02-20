import { ComponentData } from '../../sharedTypes/componentData';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

export const DeleteData = ({ userOrProfile }: ComponentData) => {
  return (
    <Section id="delete">
      <Wrapper>
        <Title
          text={`Deletar ${userOrProfile === 'user' ? 'Usuário' : 'Perfil'}`}
        />
        {userOrProfile === 'user' ? (
          <Form>
            <BoxInput
              nameInput="id"
              typeInput="text"
              nameLabel="Id"
              isRequired={false}
            />
            <BoxInput
              nameInput="email"
              typeInput="email"
              nameLabel="Email"
              isRequired={false}
            />
            <Button warning={true} text="Deletar" />
          </Form>
        ) : (
          <Form>
            <BoxInput
              nameInput="id"
              typeInput="text"
              nameLabel="Id"
              isRequired={false}
            />
            <BoxInput
              nameInput="name"
              typeInput="name"
              nameLabel="Nome"
              isRequired={false}
            />
            <Button warning={true} text="Deletar" />
          </Form>
        )}
      </Wrapper>
      <Results>
        <h2>test</h2>
      </Results>
    </Section>
  );
};
