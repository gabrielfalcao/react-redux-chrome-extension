/**
 * @jest-environment node
 */

import React from 'react'
import { shallow } from 'enzyme'
import foobar from 'foobar'


describe('Foobar', ()=>{
    it('is an object', () => {
        expect(foobar).to.equal({
            foo: 'bar'
        })
    })

})
