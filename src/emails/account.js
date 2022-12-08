const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: 'anthonypmarcel@gmail.com',
//   from: 'anthonypmarcel@gmail.com',
//   subject: 'My first sendgrid creation',
//   text: 'Hello Anthony Welcome to sendgrid mailing system',
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'anthonypmarcel@gmail.com',
    subject: 'Welcome to InciteArc',
    text: `Welcome to the Incite world ${name}. We look forward to your enjoyment of our services.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'anthonypmarcel@gmail.com',
    subject: 'We hate to see you go !!!',
    text: `We hate to see you leave ${name}, would you mind sharing some of the likes and dislikes that you got to experience at Incite Arc in-order to help us improve on it..`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
