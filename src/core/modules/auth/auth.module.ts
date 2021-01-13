import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { jwtConstants } from 'src/data/models/constants';
import { JwtStrategy, LocalStrategy } from '../strategy';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		UserModule,
		PassportModule.register({
			defaultStrategy: 'jwt',
			session: true,
		}),
		JwtModule.register({
			secret: jwtConstants.secret,
			signOptions: {
				expiresIn: '3600s'
			}
		}),

	],
	controllers: [],
	providers: [
		AuthService,
		LocalStrategy,
		JwtStrategy,
	],
	exports: [
		AuthService,
	]
})
export class AuthModule { }
