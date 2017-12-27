import { Filter } from '../../shared/modal/filter.interface';

export class ImageFilter {
    public type: Filter;
    public value: string;

    static equals(obj1: ImageFilter, obj2: ImageFilter): boolean {
        if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
            return false;
        }

        const obj1Type = (obj1.type || {}) as Filter;
        const obj1TypeCode = obj1Type.code || '';
        const obj1Val = obj1.value || '';

        const obj2Type = (obj2.type || {}) as Filter;
        const obj2TypeCode = obj2Type.code || '';
        const obj2Val = obj2.value || '';

        return obj1TypeCode.trim() === obj2TypeCode.trim() && obj1Val.trim() === obj2Val.trim();
    }
}
