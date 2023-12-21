import { IsAlphanumeric, IsByteLength, IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";

export class SetEmailDto {
	@IsEmail()
	email: string;
};

export class setUsernameDto {
	@IsString()
	@IsAlphanumeric()
	username: string;
};

export class setPasswordDto {
	@MinLength(8)
	password: string;
}