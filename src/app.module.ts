import { CatService } from './core/service/cat.service';
import { CoreModule } from './core/core.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './controller/cat.controller';

const CONTROLLERS = [
	CatController
];
const MODULES = [
	CoreModule
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
export class AppModule { }
