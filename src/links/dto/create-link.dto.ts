import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class CreateLinkDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
