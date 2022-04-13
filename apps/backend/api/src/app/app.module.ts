import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    ...environment.connection
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver : ApolloDriver,
      typePaths: ["./**/*.graphql"],
      context: ({ req }) => ({ req }),
      playground: true
    }),
    AuthModule
],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}
