import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { config } from 'process'


export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {


            type: 'mysql',
            host: configService.get('DATABASE_URL'),
            //port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_DATABASE'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: ["dist/migrations/*.js"],
            retryDelay: 3000,
            autoLoadEntities: true,
            synchronize: true,
            ssl: {
                rejectUnauthorized: false
            },
            logging:false

        }
    }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {

    imports: [ConfigModule],
    useFactory: async (configService: ConfigService):
        Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService]





}