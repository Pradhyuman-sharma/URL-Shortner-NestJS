import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions } from 'typeorm';
import { CreateLinkDto } from './dto/create-link.dto';
import { GetLinkDto } from './dto/get-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './link.entity';
import { LinksRepository } from './link.repository';

@Injectable()
export class LinksService {
  // linksRepository: LinksRepository;
  constructor(
    @InjectRepository(LinksRepository)
    private readonly linksRepository: LinksRepository,
  ) {
    this.linksRepository = linksRepository;
  }
  async getAllLinks(): Promise<Array<Link>> {
    return this.linksRepository.find({});
  }
  async createLink(createLinkDto: CreateLinkDto): Promise<Link> {
    return this.linksRepository.createLink(createLinkDto);
  }
  async getLink(conditions: FindConditions<Link>): Promise<Link> {
    const link = await this.linksRepository.findOne(conditions);
    if (!link) {
      throw new NotFoundException();
    }
    return link;
  }

  async deleteLink(getLinkDto: GetLinkDto): Promise<void> {
    const { id } = getLinkDto;
    const res = await this.linksRepository.delete({ id });
    if (res.affected === 0) {
      throw new NotFoundException(`Link doesn't exist with "${id}"`);
    }
  }
  async updateLink(
    getLinkDto: GetLinkDto,
    updateLinkDto: UpdateLinkDto,
  ): Promise<Link> {
    const { name, url } = updateLinkDto;
    const { id } = getLinkDto;
    const link = await this.getLink({ id });
    link.name = name;
    link.url = url;
    await this.linksRepository.save(link);
    return link;
  }
}
