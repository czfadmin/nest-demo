export interface CreateCatDto {
	readonly name: string;
	readonly description: string;
}
export interface UpdateCatDto {
	readonly name: string;
	readonly description: string;
	readonly age: number;
}