import { Quotes } from './quotes';
import { stringify } from '@angular/core/src/util';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quotes(public id:number, public name:string, public author:string, public like:string, public upvotes:number, public downvotes:number, public notedDate:Date){)).toBeTruthy();
  });
});
