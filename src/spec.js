import chai from 'chai';
const expect = chai.expect;

import EmptyList from './empty-list';
import ListNode from './list-node';

describe(`EmptyList`, () => {

    const list = new EmptyList();

    it(`should return '()' from toString()`, () => {
        expect(list.toString()).to.equal(`()`);
    });

    it(`should not have head or tail methods`, () => {
        expect(list.head).to.be.undefined;
        expect(list.tail).to.be.undefined;
    });

    it(`should have a length of 0`, () => {
        expect(list.length()).to.equal(0);
    });

    it(`should return 'true' on isEmpty()`, () => {
        expect(list.isEmpty()).to.equal(true);
    });

});

describe(`ListNode`, () => {

    const list0 = new EmptyList();
    const list1 = list0.push(3);
    const list2 = list1.push(2);
    const list3 = list2.push(1);

    it(`should push a single value into the list`, () => {
        expect(list1.toString()).to.equal(`(3)`);
    });

    it(`should have a length of 1`, () => {
        expect(list1.length()).to.equal(1);
    });

    it(`should return 'false' on isEmpty()`, () => {
        expect(list1.isEmpty()).to.equal(false);
    });

    it(`should push multiple values, and not modify the original list`, () => {
        expect(list2.toString()).to.equal(`(2 3)`);
        expect(list1.toString()).to.equal(`(3)`);
    });

    it(`should remove a listNode by value`, () => {
        const list0 = new EmptyList();
        const list1 = list0.push(5);
        const list2 = list1.push(4);
        const list3 = list2.push(3);
        const list4 = list3.push(4);
        const list5 = list4.push(5);

        const list6 = list5.remove(4);

        expect(list6.toString()).to.equal(`(5 3 5)`);
    });

    it(`should return the correct node's value on head()`, () => {
        expect(list2.head()).to.equal(2);
    });

    it(`should return the correct tail node on tail()`, () => {
        expect(list2.tail()).to.equal(list1);
    });

    it(`should append a list to another list`, () => {
        const list4 = list1.append(list3);

        expect(list4.toString()).to.equal(`(3 1 2 3)`);
    });

    it(`should return the correct tail node on tail() after appending`, () => {
        const list4 = list1.append(list3);

        expect(list4.tail()).to.equal(list3);
    });

    it(`should be an instance of ListNode`, () => {
        expect(list1 instanceof ListNode).to.be.true;
    });

    it(`should have tail that is an instance of EmptyList`, () => {
        expect(list1.tail() instanceof EmptyList).to.be.true;
    });

});
