import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req } from '@nestjs/common'
import { Observable } from 'rxjs';
import { CatService } from 'src/core/service/cat.service';
import { CreateCatDto } from 'src/data/dto/cat.dto';
import { Cat } from 'src/data/models/cat';

@Controller('cats')
export class CatController {

	constructor(private readonly catService: CatService) {

	}

	@Get()
	findAll(): Observable<Cat[]> {
		return this.catService.findAll();
	}


	@Post()
	@HttpCode(204)
	create(@Body() createCatDto: CreateCatDto): string {
		let newCat;
		this.catService.create(createCatDto).subscribe(it => {
			newCat = it;
		});
		return `This action create a #${newCat} cat;`
	}

	@Get('id')
	findOne(@Param('id') id: string) {
		return `This action returns a #${id} cat;`;
	}

	@Put('id')
	update(@Param('id') id: string, @Body() upadteCatDto): string {
		return `This action update a #${id} cat: ${upadteCatDto} `
	}

	@Delete('id')
	delete(@Param('id') id: string): string {
		return `This action delete a #${id} cat;`
	}
}