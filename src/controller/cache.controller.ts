import { CacheInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';

@Controller('cache')
@UseInterceptors(CacheInterceptor) // 应用缓存到该controller
export class CacheController {

	@Get()
	index() {

	}
}
