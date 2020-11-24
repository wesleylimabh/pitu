import { Request, Response} from 'express'
import { Link } from '../models/link';
import linksRepository from '../models/linksRepository'

function generateCode(){
  let text = '';
  const SIZE = 5;
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
  for (let i = 0; i < SIZE; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function postLink(req: Request, res: Response) {
  const link = req.body as Link;
  link.code = generateCode();
  link.hits = 0;
  const result = await linksRepository.add(link);
  if(!result.id) 
    return res.sendStatus(400);
  
  link.id = result.id;
  res.status(201).json(link);
}

async function getLink(req: Request, res: Response) {
  const code = req.params.code as string;
  const link = await linksRepository.findByCode(code);
  
  if(!link)
    return linkNotFound(res)

  res.send(link)
}

async function hitLink(req: Request, res: Response) {
  const code = req.params.code as string;
  const link = await linksRepository.hit(code);
  
  if(!link)
    return linkNotFound(res)

  res.send({url: link?.url})
}

function linkNotFound(res: Response) {
  const body = { message: "Link Not Found", status: 404 };
  return res.status(body.status).json(body);
}

export default {
  postLink,
  getLink,
  hitLink
}

