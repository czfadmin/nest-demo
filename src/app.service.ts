import { ConfigService } from './core/modules/config/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	private isAuthEnabled: boolean;

	constructor(private readonly config: ConfigService) {
		this.isAuthEnabled = config.get('IS_AUTH_ENABLED') === 'true';
	}
	getHello(): string {
		return 'Hello World!';
	}
}
