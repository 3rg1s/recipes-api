import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class RecipeDto {
  @IsNotEmpty()
  Name: String;
  @IsNotEmpty()
  @IsNumber()
  ready_in: Number;
  @IsNotEmpty()
  directions: String;
  @IsNotEmpty()
  @IsArray()
  ingredients: String[];
}
