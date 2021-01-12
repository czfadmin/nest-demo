import { CacheController } from './controller/cache.controller';
import { ConfigModule } from './core/modules/config/config.module';
import { ConfigService } from './core/modules/config/config.service';
import { PhotoModule } from './core/modules/photo/photo.module';
import { AccountController } from './controller/account.controller';
import { UserModule } from './core/modules/user/user.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { CacheInterceptor, CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './controller/cat.controller';
import { LoggerMiddleware } from './core/middleware/logger.middleware';
import { Photo } from './data/models/entity/photo.entity';
import { CoreModule } from './core/core.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import P from 'pino';



const CONTROLLERS = [
	CatController,
	CacheController,
	AccountController,
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
	}),
	CacheModule.register(),
	// 自定义缓存
	// CacheModule.register({
	// 	ttl: 5,
	// 	max:10
	// })
	// 自定义缓存库 
	//https://docs.nestjs.cn/6/techniques?id=%e4%b8%8d%e5%90%8c%e7%9a%84%e7%bc%93%e5%ad%98%e5%ba%93

];
const SERVICES = [

];
const PROVIDERS = [

];
@Module({
	imports: [
		ConfigModule,
		PhotoModule,
		UserModule,
		AuthModule,
		...MODULES,
	],
	controllers: [

		AppController,
		...CONTROLLERS
	],
	providers: [
		ConfigService,
		AppService,
		//全局缓存
		// {
		// 	provide: APP_INTERCEPTOR,
		// 	useClass: CacheInterceptor
		// }
	],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('cats')
	}
}
