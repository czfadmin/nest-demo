import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { PinoLogger } from 'nestjs-pino';
// const PINO = pino({
// 	level: process.env.LOG_LEVEL || 'info'
// });
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	constructor(private readonly logger: PinoLogger) {
		this.logger.setContext(LoggerMiddleware.name);
	}
	use(req: Request, res: Response, next: Function) {
		console.log('Request...');
		this.logger.info(res, "", {

		})
		next();
	}
}
