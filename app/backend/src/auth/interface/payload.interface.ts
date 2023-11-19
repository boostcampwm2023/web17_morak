import { JwtPayload } from 'jsonwebtoken';

export interface Payload extends JwtPayload {
  providerId: string;
  refreshToken?: string;
}
