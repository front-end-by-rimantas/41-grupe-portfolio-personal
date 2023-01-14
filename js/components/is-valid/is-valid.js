class IsValid {
    static object(obj) {
        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
            return false;
        }
        return true;
    }

    static nonEmptyArray(arr) {
        return Array.isArray(arr) && arr.length > 0;
    }

    static positiveInteger(num) {
        if (!Number.isInteger(num) || num < 0) {
            return false;
        }
        return true;
    }

    static stringSizeInRange(str, max = 20, min = 1) {
        if (!IsValid.positiveInteger(max)) {
            max = 20;
        }
        if (!IsValid.positiveInteger(min)) {
            min = 1;
        }

        if (typeof str !== 'string' || str.length < min || str.length > max) {
            return false;
        }
        return true;
    }

    static sCardTitle(str) {
        const maxSize = 12;
        if (!IsValid.stringSizeInRange(str, maxSize)) {
            return false;
        }
        return true;
    }
    static sCardDescription(str) {
        const maxSize = 20;
        if (!IsValid.stringSizeInRange(str, maxSize)) {
            return false;
        }
        return true;
    }
    static sCardPerks(arr) {
        const fixedLength = 3;
        if (!IsValid.nonEmptyArray(arr || arr.length !== fixedLength)) {
            return false;
        }
        return true;
    }
}

export { IsValid };
