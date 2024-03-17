import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjas.dto';
import { NinjasService } from './ninjas.service';
import { validate } from 'class-validator';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {
          }
    @Get()
    getNinjas() {
        return this.ninjasService.getAllNinjas()
    }
    // getNinjas(@Query("weapon") weapon: string) {
    //     return this.ninjasService.getNinjas(weapon)
    // }


    // get single ninjas
    @Get(":id")
    getSingleNinjas(@Param("id",ParseIntPipe) id: number) {
        console.log("typeod id is ",typeof(id));
        try {
            return this.ninjasService.getSingleNinja(id)
        } catch (error) {
            throw new NotFoundException() 
        }
    }

    // update ninja
    @Put(":id")
    updateSingleNinjas(@Param("id") id: string,@Body() updatedNinjas: CreateNinjaDto) {
        console.log("updateSingleNinjas😁😁😁😁", updatedNinjas)
        return this.ninjasService.updateNinja(+id, updatedNinjas)
    }
    // create ninjas
    @Post()
    createNinjas(@Body(new ValidationPipe()) ninjasDto: CreateNinjaDto) {
        return  this.ninjasService.createNinja(ninjasDto)
    }


    // delete ninjas
    @Delete(":id")
    deleteNinjas(@Param("id") id: string) {
        return this.ninjasService.deleteNinja(+id)
    }
}
