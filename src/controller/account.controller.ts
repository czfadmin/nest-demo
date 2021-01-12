import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/core/modules/auth/auth.service';

@Controller("account")
export class AccountController {

	constructor(private readonly authService: AuthService) {

	}

	@UseGuards(AuthGuard('local'))
	@Post('login')
	async login(@Request() req) {
		return this.authService.login(req.user)
	}


	@UseGuards(AuthGuard('jwt'))
	@Get('profile')
	getProfile(@Request() req) {
		return req.user;
	}


}
