const bre = require('cudos-blast')

async function main() {
  const [alice, bob] = await bre.getSigners()
  const contract = await bre.getContractFromAddress('cudos1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtqnj28h4')

  const QUERY_GET_COUNT = { get_count: {} }
  let count = await contract.query(QUERY_GET_COUNT, alice)
  console.log('Initial count: ' + count.count)

  const MSG_INCREMENT = { increment: {} }
  const result = await contract.execute(MSG_INCREMENT, bob)
  console.log(result)

  count = await contract.query(QUERY_GET_COUNT)
  console.log('Count after increment: ' + count.count)
}

module.exports = { main: main }
