const fastify = require('fastify')({ logger: true })

// Rota principal
fastify.get('/', async (request, reply) => {
  return { mensagem: 'API funcionando 🚀' }
})

// Iniciar servidor
fastify.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Servidor rodando em ${address}`)
})