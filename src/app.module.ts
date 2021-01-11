import { CoreModule } from './core/core.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './controller/cat.controller';
import { LoggerMiddleware } from './core/middleware/logger.middleware';



const CONTROLLERS = [
	CatController
];
const MODULES = [
	CoreModule,
];
const SERVICES = [

];
const PROVIDERS = [

];
@Module({
	imports: [
		...MODULES,
	],
	controllers: [
		AppController,
		...CONTROLLERS
	],
	providers: [
		AppService
	],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('cats')
	}
}
