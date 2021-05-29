import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeDto } from '../dtos/recipe.dto';
import { recipeEntity } from '../models/recipe.entity';

@Injectable()
export class RecipesService {
  @InjectRepository(recipeEntity)
  private readonly recipeReposirtory: Repository<recipeEntity>;

  async add(Recipe: RecipeDto) {
    return await this.recipeReposirtory
      .save(Recipe)
      .then((recipe) => {
        return { status: 'Recipe added', recipe: Recipe };
      })
      .catch((error) => {
        throw new BadRequestException('Failed to Add recipe');
      });
  }

  async listall() {
    return await this.recipeReposirtory.find();
  }
}
