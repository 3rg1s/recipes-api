import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecipeDto {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Title' })
  Title: String;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ type: 'number', description: 'Preparation_time' })
  Preparation_time: Number;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Description' })
  Description: String;

  @Column('text', { array: true })
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'ingredients', isArray: true })
  ingredients: String;
}
