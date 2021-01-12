import { PhotoModule } from './core/modules/photo/photo.module';
import { AccountController } from './controller/account.controller';
import { UserModule } from './core/modules/user/user.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { CoreModule } from './core/core.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './controller/cat.controller';
import { LoggerMiddleware } from './core/middleware/logger.middleware';
import { Photo } from './data/models/entity/photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';



const CONTROLLERS = [
	CatController
];
const MODULES = [
	CoreModule,
	PhotoModule,
	TypeOrmModule.forRoot({
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: 'root',
		password: '123456',
		database: 'c19c312-dg',
		entities: [Photo],
		synchronize: false
	})
];
const SERVICES = [

];
const PROVIDERS = [

];
@Module({
	imports: [
		PhotoModule,
		UserModule,
		AuthModule,
		...MODULES,
	],
	controllers: [
		AccountController,
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
