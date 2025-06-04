import { multiply, sum } from '../index'
import { describe, test, expect , it} from '@jest/globals'

describe ('sum module', () =>{
    
    it('adds 1 + 2 to equal 3', () =>{
        expect(sum(1, 2)).toBe(3)
    })

    it('it should return the sum of negative numbers correctly', () =>{
        expect(sum(-1, -2)).toBe(-3)
    })
})

describe ('multiply module', () =>{
    
    it('should multiply 2 and 3 to equal 6', () =>{
        expect(multiply(2, 3)).toBe(6)
    })
})