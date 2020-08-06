import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
  async index(reques: Request, response: Response) {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return response.json({ total });
  }

  async create(reques: Request, response: Response) {
    const { user_id } = reques.body;

    await db('connections').insert({
      user_id,
    });

    return response.status(201).send();
  }

}