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
  const { msg } = context.clientContext;
  try {
    const response = await fetch(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
      chat_id: process.env.CHATID,
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
