import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common/decorators';
import { Response } from 'express';
import { get } from 'http';
import { string } from 'joi';
import { CreateLinkDto } from './dto/create-link.dto';
import { GetLinkDto } from './dto/get-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './link.entity';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  async getAllLinks(): Promise<Array<Link>> {
    return this.linksService.getAllLinks();
  }

  @Post()
  async createLink(@Body() createLinkDto: CreateLinkDto) {
    this.linksService.createLink(createLinkDto);
    return `ShortenURL=http://localhost:3000/${createLinkDto.name}`;
  }

  @Delete('/:id')
  async deleteLink(@Param() getLinkDto: GetLinkDto, @Res() res: Response) {
    this.linksService.deleteLink(getLinkDto);
    return res.send('deleted successfully');
  }

  @Put('/:id')
  async updateLink(
    @Param() getLinkDto: GetLinkDto,
    @Body() updateLinkDto: UpdateLinkDto,
  ) {
    this.linksService.updateLink(getLinkDto, updateLinkDto);
    return ` Updated ShortenURL=http://localhost:3000/${updateLinkDto.name}`;
  }
}
