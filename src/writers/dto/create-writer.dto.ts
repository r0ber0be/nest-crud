import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreateWriterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dateOfBirth: string;
}
