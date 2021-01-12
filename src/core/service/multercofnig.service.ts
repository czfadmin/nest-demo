import { Injectable } from '@nestjs/common';
import { MulterOptionsFactory } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

@Injectable()
export class MulterCofnigService implements MulterOptionsFactory {
	createMulterOptions(): MulterOptions | Promise<MulterOptions> {
		return {
			dest: '/upload',
		}
	}
}
