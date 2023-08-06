export interface ZirconType {
    Function: "function";
    Class: "class";
    Property: "property";
    Namespace: "namespace";
    Enum: "enum";
}

export interface ZirconItemCompletion {
    Name: string;
    Description?: string;
    Type: keyof ZirconType;
}