import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjas.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        {
            id: 0, name: "Ali", weapon: "stick"
        },
        {
            id: 1, name: "Hassan", weapon: "hammer"
        }
    ]
    getAllNinjas(){
        return this.ninjas;
    }
    getNinjas(weapon: string) {
        this.ninjas = this.ninjas.filter(ninjas => ninjas.weapon == weapon)
        return this.ninjas;
    }
    getSingleNinja(id: number) {
        const ninja = this.ninjas.find(ninja => ninja.id === id)
        if (!ninja) {
            throw new Error("Ninja not found")
        }
        return ninja

    }
    createNinja(ninjaDto: CreateNinjaDto) {
        const newNinja = {
            id: Date.now(),
            name: ninjaDto.name,
            weapon: ninjaDto.weapons
        }
        this.ninjas.push(newNinja)
        return newNinja;
    }

    // update ninja service function 
    updateNinja(id: number, ninjaDto: CreateNinjaDto) {
        console.log("updateNinja",id,ninjaDto);
        const ninja = this.ninjas.find(ninja => ninja.id === id)
        if (!ninja) {
            throw new Error("Ninja not found")
        }
        console.log("ninja=====>",ninja);
        ninja.name = ninjaDto.name
        ninja.weapon = ninjaDto.weapons

        return this.getSingleNinja(id)
    }
    // delete ninja service function
    deleteNinja(id: number) {
        const ninja = this.ninjas.find(ninja => ninja.id === id)
        if (!ninja) {
            throw new Error("Ninja not found")
        }
        this.ninjas = this.ninjas.filter(ninja => ninja.id!== id)
        return ninja

    }
}
