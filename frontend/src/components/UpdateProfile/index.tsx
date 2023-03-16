import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

export const UpdateProfile = () => {
  return (
    <Section id="update">
      <Wrapper>
        <Title text="Perfil" />
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

          <Title text="Alterar Perfil" />
          <BoxInput nameInput="name" typeInput="text" nameLabel="Nome" />
          <BoxInput nameInput="label" typeInput="label" nameLabel="Rótulo" />
          <Button text="Alterar perfil" />
        </Form>
      </Wrapper>
      <Results>
        <h2>test</h2>
      </Results>
    </Section>
  );
};
