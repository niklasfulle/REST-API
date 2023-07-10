import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
var path = __dirname.replace("utils", "");
dotenv.config({ path: path + '.env' });

const JWT_SECRET = process.env.JWT_SECRET as string;
const EXPIRES_IN = process.env.EXPIRES_IN as string;

export function signJwt(payload: string | Buffer | object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: EXPIRES_IN,
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    return decoded;
  } catch (e) {
    return null;
  }
}