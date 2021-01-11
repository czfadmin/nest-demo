import { Module, Global } from '@nestjs/common';
import { CatService } from './service/cat.service';
import { UtilsModule } from './utils/utils.module';

const PROVIDERS = [
	CatService
];
const EXPORT_PROVIDERS = [
	UtilsModule
];

@Global()//https://docs.nestjs.cn/6/modules?id=%e5%85%a8%e5%b1%80%e6%a8%a1%e5%9d%97
@Module({
	imports: [UtilsModule],
	providers: [
		...PROVIDERS
	],
	exports: [
		CatService,
		...EXPORT_PROVIDERS
	]
})
export class CoreModule { }
