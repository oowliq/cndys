import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot({
            playground: true,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            definitions: {
                path: join(process.cwd(), 'src/graphql.ts')
            }
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
