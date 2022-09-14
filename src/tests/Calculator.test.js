import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let plus;
  let minus;
  let equals;
  let multiply;
  let divide;
  let clear;

  let runningTotal;
  beforeEach(() => {
    container = render(<Calculator />)
    button1 = container.getByTestId('number1');
    plus = container.getByTestId("operator-add");
    minus = container.getByTestId("operator-subtract");
    equals = container.getByTestId("operator-equals");
    button4 = container.getByTestId('number4');
    runningTotal = container.getByTestId('running-total');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    multiply = container.getByTestId('operator-multiply')
    divide = container.getByTestId('operator-divide')
    clear = container.getByTestId('clear')

  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });
  it("should add 1 to 4", () => {
    fireEvent.click(button1)
    fireEvent.click(plus)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('5')
  });
  it('ssubtract 4 from 7 and get 3', () => {
    fireEvent.click(number7)
    fireEvent.click(minus)
    fireEvent.click(number4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')

  });
  it('multiply 3 by 5 and get 15', () => {
    fireEvent.click(number3)
    fireEvent.click(multiply)
    fireEvent.click(number5)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('15')

  });
  it('divide 21 by 7 and get 3', () => {
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(divide)
    fireEvent.click(number7)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')

  });
  it('concentrate multiple number button clicks', () => {
    fireEvent.click(number1)
    fireEvent.click(number1)
    fireEvent.click(number1)
    expect(runningTotal.textContent).toEqual('111')
  });
  it('chain multiple operations together', () => {
    fireEvent.click(number2)
    fireEvent.click(plus)
    fireEvent.click(number2)
    fireEvent.click(plus)
    fireEvent.click(number2)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('6')


  });
  it('clear the running total without affecting the calculation', () => {
    fireEvent.click(number2)
    fireEvent.click(multiply)
    fireEvent.click(number6)
    fireEvent.click(multiply)
    fireEvent.click(clear)
    fireEvent.click(number2)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('24')

  });

})

// // fireEvent.click()
// fireEvent.click()
// fireEvent.click()
// fireEvent.click()



