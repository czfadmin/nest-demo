import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req, SetMetadata, UseGuards } from '@nestjs/common'

import { Observable } from 'rxjs';
import { CatService } from 'src/core/service/cat.service';
import { CreateCatDto } from 'src/data/dto/cat.dto';
import { Cat } from 'src/data/models/cat';
import { ForbiddenException } from 'src/core/exception/forbidden.exception'
import { AuthGuard } from "src/core/guard/auth.guard"
import { RolesGuard } from 'src/core/guard/roles.guard';
@Controller('cats')
@UseGuards(RolesGuard)
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

	@Get(':id')
	findOne(@Param('id') id: string) {
		return new ForbiddenException();
		// return `This action returns a #${id} cat;`;
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() upadteCatDto): string {
		return `This action update a #${id} cat: ${upadteCatDto} `
	}

	@Delete(':id')
	delete(@Param('id') id: string): string {
		return `This action delete a #${id} cat;`
	}



	@Get()
	// @SetMetadata('roles', ['admin'])
	@Roles('admin')
	async auth(@Body() createCatDto: CreateCatDto) {

	}


}

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);