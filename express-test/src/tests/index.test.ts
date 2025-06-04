import {describe , expect, it} from '@jest/globals';
import {app} from '../index';
import request from 'supertest';

describe('POST /sum', () =>{

    it('should return the sum of two numbers', async () =>{
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.result).toBe(3)
    })

    it('should return the sum of two negative numbers correctly', async () =>{
        const res = await request(app).post('/sum').send({
            a: -1,
            b: -2
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.result).toBe(-3)
    })

    it('should return the sum of two zeroes to be zero', async () =>{
        const res = await request(app).post('/sum').send({
            a: 0,
            b: 0
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.result).toBe(0)
    })
})