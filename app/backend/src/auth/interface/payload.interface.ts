import { JwtPayload } from 'jsonwebtoken';

export interface Payload extends JwtPayload {
  userId: bigint;
  providerId: string;
  socialType: string;
  email: string;
  profilePicture: string;
  nickname: string;
}
