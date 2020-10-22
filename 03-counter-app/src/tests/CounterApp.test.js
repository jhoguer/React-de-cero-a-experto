import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

  // No es buena practica pero ayuda a no perder el autocomplete de wrapper
  let wrapper = shallow(<CounterApp />);

  beforeEach( () => {
    wrapper = shallow(<CounterApp />);
  })
  

  test('debe mostrar <CounterApp /> correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })


  test('debe de mostrar el valor por defecto 100', () => {

    const wrapper = shallow( <CounterApp value={ 100 } />);

    const valorPorDefecto = wrapper.find('h2').text().trim()
    expect( valorPorDefecto ).toBe( '100' );
  });


  test('debe incrementar con el boton +1', () => {

    wrapper.find('button').at(0).simulate('click');
    const couterText = wrapper.find('h2').text().trim();
    expect( couterText ).toBe('11');
  })


  test('debe decrementar con el boton -1', () => {

    wrapper.find('button').at(2).simulate('click');
    const couterText = wrapper.find('h2').text().trim();
    expect( couterText ).toBe('9');
  })


  test('debe de colocar el valor por defecto con el btn reset', () => {

    const wrapper = shallow( <CounterApp value={ 105 } />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const couterText = wrapper.find('h2').text().trim();

    expect( couterText ).toBe('105');


    console.log( couterText )
  })
})