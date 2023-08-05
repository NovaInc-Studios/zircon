import {ZirconValidator} from "./ZirconTypeValidator";

export abstract class StatefulZirconValidator<T, U = never> implements ZirconValidator<T, U> {
    public constructor(public Type: string) {
    }

    public abstract Validate(value: unknown): value is T;
}
