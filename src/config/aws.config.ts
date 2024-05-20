import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRECT_ACCESS_KEY,
    region: process.env.REGION
});
  
const S3 = new AWS.S3();

export default S3;