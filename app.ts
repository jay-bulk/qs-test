import Fastify, {FastifyInstance} from 'fastify'
import db from "./plugins/db";
import auth from './plugins/auth'
import qs from 'qs'

export async function app (): Promise<FastifyInstance> {
  
  let fastify: FastifyInstance = Fastify({
    querystringParser: (query) => {
      qs.parse(str, {comma: true})
    }
  })
  await fastify.register(db)
  await fastify.register(auth)

  fastify.get('/', function (request, reply) {
    reply.send({hello: 'world'})
  })
  return fastify
}




