import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
	name: "tztek_sm_enviroment"
})
export class Photo {
	@PrimaryGeneratedColumn({
		name: 'ID'
	})
	id: number;

	@Column({
		name: 'NAME',
		length: 500
	})
	name: string;

	@Column('text', {
		name: 'RECORD_TIME'
	})
	recordTime: string;

	@Column({
		name: 'SENSOR_TYPE'
	})
	sensorType: string;

	@Column('float', {
		name: 'SENSOR_VALUE'
	})
	sensorValue: number;

	@Column('text', {
		name: 'MEMO'
	})
	memo: string;
}

