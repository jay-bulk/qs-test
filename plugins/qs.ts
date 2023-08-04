import fp from 'fastify-plugin'
import qs from 'qs'
import fastify-qs from 'fastify-qs'

declase module 'fastify' {
  interface FastifyRequest {
    parser: qs
  }
}

export default fp(async (fastify) => {
  fastify.decorateRequest('qs', null)

  await fastify.addHook('preSerialzation', async (req: FastifyRequest, reply: FastifyReply) => {
  }}
