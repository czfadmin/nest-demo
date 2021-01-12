import { PhotoController } from './../../../controller/photo.controller';
import { PhotoService } from './photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Photo } from 'src/data/models/entity/photo.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([Photo]),
	],
	controllers: [
		PhotoController,
	],
	providers: [
		PhotoService,
	],
	exports: [
		TypeOrmModule
	]
})
export class PhotoModule { }
