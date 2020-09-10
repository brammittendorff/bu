import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './user.entity';

@Module({
  imports:[UsersModule,
    TypeOrmModule.forFeature([UserEntity])],

  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}