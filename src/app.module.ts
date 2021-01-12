import { MulterCofnigService } from './core/service/multercofnig.service';
import { FileController } from './controller/file.controller';
import { CacheController } from './controller/cache.controller';
import { ConfigService } from './core/modules/config/config.service';
import { PhotoModule } from './core/modules/photo/photo.module';
import { AccountController } from './controller/account.controller';
import { UserModule } from './core/modules/user/user.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { CacheInterceptor, CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './controller/cat.controller';
import { LoggerMiddleware } from './core/middleware/logger.middleware';
import { Photo } from './data/models/entity/photo.entity';
import { CoreModule } from './core/core.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from './core/modules/config/config.module';




const CONTROLLERS = [
	CatController,
	CacheController,
	AccountController,
];
const MODULES = [
	CoreModule,
	ConfigModule,
	TypeOrmModule.forRoot({
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: 'root',
		password: 'root',
		database: 'nestjs-demo',
		entities: [
			`${__dirname}/**/*.entity{.ts,.js}`
			// Photo
		],
		synchronize: true
	}),
	PhotoModule,
	CacheModule.register(),
	// 自定义缓存
	// CacheModule.register({
	// 	ttl: 5,
	// 	max:10
	// })
	// 自定义缓存库 
	//https://docs.nestjs.cn/6/techniques?id=%e4%b8%8d%e5%90%8c%e7%9a%84%e7%bc%93%e5%ad%98%e5%ba%93,
	// 配置上传
	MulterModule.register({
		dest: '/upload',
	}),

	// 支持异步上传
	// 1. 使用工厂函数
	// MulterModule.registerAsync({
	// 	useFactory: () => ({
	// 			dest:'/upload',
	// 	})
	// })

	// 2.通过注入方式上传依赖
	// MulterModule.registerAsync({
	// 	imports: [ConfigModule],
	// 	useFactory: async (configService: ConfigService) => ({
	// 		dest: configService.getString('MULTER_DEST'),
	// 	}),
	// 	inject: [ConfigService],
	// });

	// 3. 使用类配置
	// MulterModule.registerAsync({
	// 	useClass:MutlerConfigService,
	// 为了防止创建 MulterConfigService 内部 MulterModule 并使用从不同模块导入的提供程序，您可以使用 useExisting 语法
	// imports:[ConfigModule]
	// useExisting: ConfigService,
	// })
	// ConfigModule.forRoot({
	// 	envFilePath: './src/data/env'
	// }),

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
		FileController,
		AppController,
		...CONTROLLERS
	],
	providers: [
		MulterCofnigService,
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
