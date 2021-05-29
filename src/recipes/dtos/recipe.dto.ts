import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecipeDto {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Name' })
  Name: String;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ type: 'number', description: 'ready_in' })
  ready_in: Number;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'directions' })
  directions: String;

  @Column('text', { array: true })
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'ingredients', isArray: true })
  ingredients: String;
}
