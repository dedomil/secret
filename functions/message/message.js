const fetch = require('node-fetch')

const handler = async function (event, context) {
  if (!context.clientContext && !context.clientContext.identity) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: 'No identity instance detected. Did you enable it?',
      }),
    }
  }
  const { msg } = context.clientContext
  try {
    const response = await fetch('https://api.telegram.org/bot5583030810:AAG7ethPHzaLxuo7GnC2P6I15S4WOqprtso/sendMessage', {
      chat_id: 5278367192,
      text: msg
    })
    if (!response.ok) {
      return { message: "Message Not Sent!" }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message Sent!" }),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Message Not Sent!" }),
    }
  }
}

module.exports = { handler }
