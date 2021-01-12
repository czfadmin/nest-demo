import * as fs from 'fs';
import * as path from 'path';
import { Module } from '@nestjs/common';


import { ConfigController } from './../../../controller/config.controller';
import { ConfigService } from './config.service';

@Module({
	imports: [

	],
	controllers: [
		ConfigController,
	],
	providers: [
		{
			provide: ConfigService,
			useValue: new ConfigService(path.join(path.resolve('./'), `${process.env.NODE_ENV || 'development'}.env`))
		}
	],
	exports: [
		ConfigService
	]
})
export class ConfigModule { }
