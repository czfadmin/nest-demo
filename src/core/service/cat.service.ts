import { Injectable } from '@nestjs/common';
import { CreateCatDto } from 'src/data/dto/cat.dto';
import { Cat } from 'src/data/models/cat';

@Injectable()
export class CatService {
	findAll(): import("rxjs").Observable<Cat[]> {
		throw new Error('Method not implemented.');
	}


	create(createCatDto: CreateCatDto): Cat {
		throw new Error('Method not implemented.');
	}







}
