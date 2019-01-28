import { Quotes } from './quotes';
import { stringify } from '@angular/core/src/util';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quotes(1,'','','',5,5,new Date(2019,29,1))).toBeTruthy();
  });
});
