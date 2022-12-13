import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
export class UpdateLinkDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
