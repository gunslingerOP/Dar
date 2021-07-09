import * as bcrypt from "bcrypt";

const sgMail = require("@sendgrid/mail");
/**
 * @param res
 * @param err
 * @param statusCode
 */

const errRes = (err, statusCode = 400) => {
  return {
    statusCode,
    data: JSON.stringify({
      success: false,
      error: err,
    }),
  };
};

const okRes = (data, statusCode = 200) => {
  return {
    statusCode,
    data: JSON.stringify({
      success: true,
      data,
    }),
  };
};

const getOTP = () => Math.floor(1000 + Math.random() * 9000);

const hashMyPassword = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(plainPassword, salt);
  return password;
};

const comparePassword = async (plainPassword, hash) =>
  await bcrypt.compare(plainPassword, hash);

const paginate = (p = 1, s = 10) => {
  let take = s;
  let skip = s * (p - 1);
  return { take, skip };
};

const emailVerifyOtp = async (email, secretCode, action, link) => {
  const msg = {
    to: email,
    from: "hasanaqeel38@gmail.com",
    subject: `Your OTP for ${action}!`,
    text: `Your OTP is ${secretCode}`,
    html: `<strong>Your OTP is ${secretCode}</strong>
    <p> Click this link and enter the otp to ${action}: ${link}<p>
    `,
  };

  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
};

const sendMail = async (email, body, subject, req, res) => {
  const msg = {
    personalizations: email,
    from: "hasanaqeel38@gmail.com",
    subject: `${subject}`,
    html: `${body}`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    if (error.response) {
      return errRes(res, error.response.body.errors[0].message);
    }
    return errRes(res, error);
  }
};

export {
  okRes,
  errRes,
  emailVerifyOtp,
  getOTP,
  hashMyPassword,
  comparePassword,
  paginate,
  sendMail,
};

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
