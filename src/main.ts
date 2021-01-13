import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';
import * as cookie from 'cookie-parser';


import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: true,
	});
	app.use(cookie());
	app.useGlobalPipes(new ValidationPipe({
		disableErrorMessages: true,
		transform: true,
	}));
	app.enableCors({
		methods: [
			'GET',
			'POST',
			'PUT',
			'DELETE'
		],
		origin: true
	})
	app.use(helmet());

	app.use(csurf({
		cookie: true
	}));

	app.use(rateLimit({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100, // limit each IP to 100 requests per windowMs
	}));

	// swagger
	const options = new DocumentBuilder()
		.setTitle('Cats example')
		.setDescription('The cats API description')
		.setVersion('1.0')
		.addTag('cats')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);

	await app.listen(3000);
}
bootstrap();
