import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

  test('debe mostrar <CounterApp /> correctamente', () => {

    const wrapper = shallow(<CounterApp />)

    expect( wrapper ).toMatchSnapshot();
  })

  test('debe de mostrar el valor por defecto 100', () => {

    const wrapper = shallow(
      <CounterApp
        value={ 100 }
      />
    );

    const valorPorDefecto = wrapper.find('h2').text().trim()

    expect( valorPorDefecto ).toBe( '100' );
  })
})