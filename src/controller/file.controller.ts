import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {

	// 文件上传
	@Post('upload')
	@UseInterceptors(FilesInterceptor('files'))
	uploadFile(@UploadedFiles() files) {
		console.log(files);
	}

	// 多文件上传
	@Post('mulitUpload')
	@UseInterceptors(FileFieldsInterceptor([
		{ name: 'avatar', maxCount: 1 },
		{ name: 'background', maxCount: 1 },
	]))
	updateMultiFile(@UploadedFiles() files) {
		console.log(files);
	}

	// 上传任意文件
	@Post('any')
	@UseInterceptors(AnyFilesInterceptor())
	updateAnyFiles(@UploadedFiles() files) {
		console.log(files);
	}






}
