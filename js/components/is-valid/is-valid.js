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

    static stringSizeInRange(str, max = 50, min = 1) {
        if (!IsValid.positiveInteger(max)) {
            max = 50;
        }
        if (!IsValid.positiveInteger(min)) {
            min = 1;
        }

        if (typeof str !== 'string' || str.length < min || str.length > max) {
            return false;
        }
        return true;
    }
    // shop js start
    static sCardTitle(str) {
        const maxSize = 12;
        if (!IsValid.stringSizeInRange(str, maxSize)) {
            return false;
        }
        return true;
    }
    static sCardDescription(str) {
        const maxSize = 30;
        if (!IsValid.stringSizeInRange(str, maxSize)) {
            return false;
        }
        return true;
    }
    static sCardPerk(str) {
        const maxSize = 50;
        if (!IsValid.stringSizeInRange(str, maxSize)) {
            return false;
        }
        return true;
    }

    static sPrice(num) {
        if (!IsValid.positiveInteger(num)) {
            return false;
        }
        return true;
    }
    // shop js end
}

export { IsValid };
