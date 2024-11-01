import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsString } from "class-validator";

export class CreateEpisodeDto {
    @IsString()
    name: string;

    @IsBoolean()
    featured?: boolean;

    @IsDate()
    @Type(() => Date)
    publishedAt: Date;
}