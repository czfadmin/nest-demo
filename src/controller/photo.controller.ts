import { Controller, Get } from '@nestjs/common';

import { PhotoService } from './../core/modules/photo/photo.service';

@Controller('photo')
export class PhotoController {

	constructor(private readonly photoService: PhotoService) {

	}
	@Get('all')
	async all() {
		return this.photoService.all();
	}

}
