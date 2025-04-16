import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        const jwtSecret = configService.get<string>('SECRET_JWT');
        if (!jwtSecret) {
            throw new Error('JWT secret not found');
        }
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret,
        });
    }

    async validate(payload: any) {
        return {
            Idvendedor: payload.Idvendedor,
            Nombre: payload.Nombre,
            Fechaingreso: payload.Fechaingreso,
            Aguinaldo: payload.Aguinaldo,
            Domicilio: payload.Domicilio,
            Telefono: payload.Telefono,
            Sucursal: payload.Sucursal,
            Comision: payload.Comision,
            Estatus: payload.Estatus,
            Puntos: payload.Puntos,
        };
    }
    //Fechaingreso,Aguinaldo,Domicilio,Telefono,sucursal,Comision,Estatus,Puntos
}