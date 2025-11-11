import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { Payment } from "@prisma/client";
import { Optional } from "@nestjs/common";

export class CreateTransactionDto {
    @Optional()
    @IsString()
    paymentMethod?: Payment;

    @IsOptional()
    @ValidateNested()
    detail?: DetailMenuDto[];
}

export class DetailMenuDto {
    @IsNumber()
    @IsOptional()
    menuId?: string;

    @IsNumber()
    @IsOptional()
    quantity?: number;
}