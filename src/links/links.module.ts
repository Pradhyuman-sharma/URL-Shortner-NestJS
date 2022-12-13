import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinksRepository } from './link.repository';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LinksRepository])],
  providers: [LinksService],
  controllers: [LinksController],
  exports: [LinksService],
})
export class LinksModule {}
