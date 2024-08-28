import { RoleEnum } from "../enums/RoleEnum";
import { Address } from "./Address";

export class Driver {
    private readonly _id: number;
    private readonly _name: string;
    private readonly _cpf: string;
    private readonly _age: number;
    private readonly _sex: string;
    private readonly _address: Address;
    private readonly _role: RoleEnum;

    constructor(
        name: string,
        cpf: string,
        age: number,
        sex: string,
        address: Address,
        role: RoleEnum,
        id?: number
    ) {
        if (!this.isValidCPF(cpf)) {
            throw new Error('CPF inválido.');
        }
        if (age < 18 || age > 100) {
            throw new Error('Idade deve ser entre 18 e 100 anos.');
        }
        if (!['M', 'F'].includes(sex)) {
            throw new Error('Sexo deve ser "M" (masculino) ou "F" (feminino).');
        }

        this._id ? id : null;
        this._name = name.trim();
        this._cpf = cpf;
        this._age = age;
        this._sex = sex;
        this._address = Address.formatAddress(address);
        this._role = role;
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public get age(): number {
        return this._age;
    }

    public get sex(): string {
        return this._sex;
    }

    public get address(): Address {
        return { ...this._address };
    }

    public get role(): RoleEnum {
        return this._role;
    }

    // public set id(id: number): void {
    //     this.id = id;
    // }

    public set name(name: string) {
        this.name = name;
    }

    public set cpf(cpf: string) {
        this.cpf;
    }

    public set age(age: number) {
        this.age = age;
    }

    public set sex(sex: string) {
        this.sex = sex;
    }

    public set address(address: Address) {
        this.address = address;
    }

    private isValidCPF(cpf: string): boolean {
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
          return false;
        }
    
        let sum = 0;
        let remainder;
    
        for (let i = 1; i <= 9; i++) {
          sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
    
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.substring(9, 10))) return false;
    
        sum = 0;
        for (let i = 1; i <= 10; i++) {
          sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
    
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.substring(10, 11))) return false;
    
        return true;
      }
}