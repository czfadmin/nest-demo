import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateCatDto {

	@IsNotEmpty()
	name: string;
	readonly description: string;
	@IsNotEmpty()
	readonly breed: string;
}
export interface UpdateCatDto {
	readonly name: string;
	readonly description: string;
	readonly age: number;
}
