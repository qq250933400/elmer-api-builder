import 'mocha';
import { expect } from 'chai';
import {
    scanFolder,
    checkDir,
    exists,
    isFile,
    isDir,
    argv,
    object2code
} from '../../src/common/common';

describe('The common module export function test', () => {
    it('The common moudle should be has "scanFolder" function', () => {
        expect(typeof scanFolder).to.eql('function');
    });
    it('The common moudle should be has "checkDir" function', () => {
        expect(typeof checkDir).to.eql('function');
    });
    it('The common moudle should be has "exists" function', () => {
        expect(typeof exists).to.eql('function');
    });
    it('The common moudle should be has "isFile" function', () => {
        expect(typeof isFile).to.eql('function');
    });
    it('The common moudle should be has "isDir" function', () => {
        expect(typeof isDir).to.eql('function');
    });
    it('The common moudle should be has "object2code" function', () => {
        expect(typeof object2code).to.eql('function');
    });
    console.log(argv);
});
