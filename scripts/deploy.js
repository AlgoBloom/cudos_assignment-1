const bre = require('cudos-blast')

async function main() {
  const [alice] = await bre.getSigners()
  const contract = await bre.getContractFactory('messaging')

  const MSG_INIT = { text: "hello" }
  await contract.deploy(MSG_INIT, 'alpha', { signer: alice })
  console.log(`Contract deployed at: ${contract.getAddress()}`)
}

module.exports = { main: main }
