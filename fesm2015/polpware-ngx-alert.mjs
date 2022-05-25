class AlertDefaultImpl {
    constructor() {
        this._items = [];
    }
    get data() {
        return this._items;
    }
    clean() {
        this._items = [];
    }
    info(m, timeout) {
        this._items.push({
            type: 'info',
            message: m,
            timeout: timeout || 0
        });
    }
    success(m, timeout) {
        this._items.push({
            type: 'success',
            message: m,
            timeout: timeout || 0
        });
    }
    warning(m, timeout) {
        this._items.push({
            type: 'warning',
            message: m,
            timeout: timeout || 0
        });
    }
    danger(m, timeout) {
        this._items.push({
            type: 'danger',
            message: m,
            timeout: timeout || 0
        });
    }
}

/*
 * Public API Surface of ngx-alert
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertDefaultImpl };
//# sourceMappingURL=polpware-ngx-alert.mjs.map
