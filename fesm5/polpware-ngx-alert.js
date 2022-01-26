var AlertDefaultImpl = /** @class */ (function () {
    function AlertDefaultImpl() {
        this._items = [];
    }
    Object.defineProperty(AlertDefaultImpl.prototype, "data", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    AlertDefaultImpl.prototype.clean = function () {
        this._items = [];
    };
    AlertDefaultImpl.prototype.info = function (m, timeout) {
        this._items.push({
            type: 'info',
            message: m,
            timeout: timeout || 0
        });
    };
    AlertDefaultImpl.prototype.success = function (m, timeout) {
        this._items.push({
            type: 'success',
            message: m,
            timeout: timeout || 0
        });
    };
    AlertDefaultImpl.prototype.warning = function (m, timeout) {
        this._items.push({
            type: 'warning',
            message: m,
            timeout: timeout || 0
        });
    };
    AlertDefaultImpl.prototype.danger = function (m, timeout) {
        this._items.push({
            type: 'danger',
            message: m,
            timeout: timeout || 0
        });
    };
    return AlertDefaultImpl;
}());

/*
 * Public API Surface of ngx-alert
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertDefaultImpl };
//# sourceMappingURL=polpware-ngx-alert.js.map
