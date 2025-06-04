import { Request, Response } from 'express';
jest.mock('../database/car', () => ({
  createCarDB: jest.fn(),
}));

import { createCar } from '../controller/carController';
import { createCarDB } from '../database/car';

describe('createCar', () => {
  it('responds with status 201 and success message', async () => {
    const req = {
      body: {
        carRegistrationNumber: 'ABC123',
        carBrand: 'Honda',
        carModel: 'Civic',
        note: 'test note'
      }
    } as unknown as Request;

    const json = jest.fn();
    const status = jest.fn().mockReturnValue({ json });
    const res = { status } as unknown as Response;

    (createCarDB as jest.Mock).mockResolvedValue({ id: '1', ...req.body } as any);

    await createCar(req, res);

    expect(status).toHaveBeenCalledWith(201);
    expect(json).toHaveBeenCalledWith({
      success: true,
      message: 'inserted car data succesfully',
      data: { id: '1', ...req.body }
    });
  });
});
