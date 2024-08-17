import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreateWritterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dateOfBirth: string;
}
