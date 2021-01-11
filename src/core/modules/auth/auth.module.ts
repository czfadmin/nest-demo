import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';

@Module({
	imports: [
		UserModule,
		PassportModule,
	],
	controllers: [],
	providers: [
		AuthService,
		LocalStrategy
	],
})
export class AuthModule { }
