import { ComponentData } from '../../sharedTypes/componentData';
import { BoxInput } from '../BoxInput';
import { Button } from '../Button';
import { Form } from '../Form';
import { Results } from '../Results';
import { Section } from '../Section';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

export const FilterData = ({ userOrProfile }: ComponentData) => {
  return (
    <Section id="search">
      <Wrapper>
        <Title
          text={`Consultar ${userOrProfile === 'user' ? 'usuário' : 'perfil'}`}
        />
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
          <Button text="Consultar" />
        </Form>
      </Wrapper>
      <Results>
        <h2>Test</h2>
      </Results>
    </Section>
  );
};
