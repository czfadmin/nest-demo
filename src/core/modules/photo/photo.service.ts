import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from 'src/data/models/entity/photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {

	constructor(
		@InjectRepository(Photo)
		private readonly photoRepo: Repository<Photo>) {

	}

	findAdd(): Promise<Photo[]> {
		return this.photoRepo.find();
	}

	all(): Promise<Photo[]> {
		return this.photoRepo.find();
	}


}
