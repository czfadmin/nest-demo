export interface CreateCatDto {
	readonly name: string;
	readonly description: string;
	readonly breed: string;
}
export interface UpdateCatDto {
	readonly name: string;
	readonly description: string;
	readonly age: number;
}