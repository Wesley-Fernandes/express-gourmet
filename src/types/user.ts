import { LocalizationType } from "./localization";

export interface UserInterface {
    id: string;
    name: string;
    icon: string;
    localization?: LocalizationType;
}