import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: true,
	});
	app.useGlobalPipes(new ValidationPipe({
		disableErrorMessages: true,
		transform: true,
	}));
	app.use(helmet())
	app.use(csurf())
	await app.listen(3000);
}
bootstrap();
