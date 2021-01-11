import { Injectable } from '@nestjs/common';
import { of, Observable } from 'rxjs';
import { CreateCatDto } from 'src/data/dto/cat.dto';
import { Cat } from 'src/data/models/cat';

@Injectable()
export class CatService {

	CATS: Cat[] = [
		{
			id: 0,
			name: 'kitty',
			description: 'Kitty',
			age: 0.5,
			breed: 'Kitty Cat'
		}
	]
	findAll(): Observable<Cat[]> {
		return of(this.CATS);
	}


	create(createCatDto: CreateCatDto): Observable<Cat> {
		let cat = {
			id: this.CATS.length,
			name: `'cat-${this.CATS.length}`,
			description: `${createCatDto.description}`,
			age: 0,
			breed: createCatDto.breed
		};
		return of(cat);
	}







}
