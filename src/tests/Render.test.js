import renderer from 'react-test-renderer';
import Render from '../Render';

// Caso de teste atualizado com um Link para um endereço diferente
it('renderiza corretamente', async () => {
    const tree = renderer
      .create(<Render/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });