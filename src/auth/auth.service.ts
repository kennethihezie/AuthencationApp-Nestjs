import { Injectable, NotFoundException } from '@nestjs/common';
import { FilterUsersDto } from './dto/filter.users.dto';
import { LoginDto } from './dto/login.dto';
import { UserDto } from './dto/user.dto';
import { LoginMsg } from './model/login.msg';
import { Status, User } from './model/user';
import { v4 as uuid } from 'uuid';


@Injectable()
export class AuthService {
    private users: User[] = []

    createUser(userDto: UserDto): User {
       const { firstName, lastName, age, email, pass } = userDto
       const user = {
           id: uuid(),
           firstName,
           lastName,
           age,
           email,
           pass,
           status: Status.PENDING
       }
       
       this.users.push(user)
       return user
    }

    loginUser(loginDto: LoginDto): LoginMsg {
       const { email, pass } = loginDto
       const user = this.users.find( item => item.pass == pass)
       //will still change this implementation
       if(user){
           return {
            status: true,
            message: "successfully signed in",
            user: user
           }
       } else {
        return {
            status: false,
            message: "sigin failed..incorrect pass",
            user: null
           }
       } 
    }

    getAllUsers(): User[]{
        return this.users
    }

    getAllUsersWithFilter(filterUsersDto: FilterUsersDto): User[]{
        let allUser = this.getAllUsers()

        const { status, search } = filterUsersDto
        if(status){
          allUser = allUser.filter(item => item.status === filterUsersDto.status)
        }

        if(search){
            allUser = allUser.filter(item => item.firstName === filterUsersDto.search ||
                item.lastName === filterUsersDto.search || item.email === filterUsersDto.search)
        }

        return allUser
    }

    getUserById(id: string): User {
        let user = this.users.find(item => item.id == id)
        if(!user){
              //using default msg
         //throw new NotFoundException()

         //custom msg
         throw new NotFoundException(`Task with ID "${id}" not found`)
        }
        return user
    }

    updateUser(id: string, status: Status): User{
       let user = this.getUserById(id)
       user.status = status
       return user
    }

    deleteUser(id: string): LoginMsg {
        let user = this.getUserById(id)
        this.users = this.users.filter(item => id !== item.id)
        return {
            status: true,
            message: "deleted successfully",
            user: null
        }
    }
}
