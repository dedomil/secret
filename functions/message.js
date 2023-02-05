const axios = require("axios").default;

exports.handler = async (event, context) => {
  const { msg } = JSON.parse(event.body)
  try {
    if (!msg) return;
    await axios.post(`https://api.telegram.org/bot5583030810:AAG7ethPHzaLxuo7GnC2P6I15S4WOqprtso/sendMessage`, {
      chat_id: 5278367192,
      text: msg
    });
    return ({
      statusCode: 200,
      body: JSON.stringify({ message: "Message Sent! ✔" })
    })
  } catch (error) {
    return ({
      statusCode: 200,
      body: JSON.stringify({ message: "Message Not Sent! ❌" })
    })
  }
}
