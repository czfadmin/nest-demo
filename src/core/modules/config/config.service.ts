import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';

export type EnvConfig = Record<string, string>;

@Injectable()
export class ConfigService {
	private readonly envConfig: EnvConfig;
	constructor(filePath: string) {
		const config = dotenv.parse(fs.readFileSync(filePath));
		this.envConfig = this.validateInput(config);
	}

	get(key: string): string {
		return this.envConfig[key];
	}


	private validateInput(envConfig: EnvConfig): EnvConfig {
		const envVarsSchema: Joi.ObjectSchema = Joi.object({
			NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
			PORT: Joi.number().default(3000),
			API_AUTH_ENABLED: Joi.boolean().required()
		});
		const { error, value: validedEnvConfig } = envVarsSchema.validate(envConfig,);
		if (error) {
			throw new Error(`Config validate error: ${error.message}`);
		}
		return validedEnvConfig;
	}

	get isApiAuthEnabled(): boolean {
		return Boolean(this.envConfig.API_AUTH_ENABLED)
	}


}
